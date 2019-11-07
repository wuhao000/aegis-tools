import toPascal from '../pascal';
import {ApiDefinitions, SwaggerDoc} from '../types/swagger';
import Api, {toDefinitionString} from './api';
import {ApiConfig, Config, getConfig} from './config';
import {generateApiDefinitions, generateBeanDefinitions} from './definition';
import {beanDefFileName, writeFile} from './file';
import ImportDeclaration from './import-declaration';
import Interface from './interface';
import {pure} from './type';


export function generateAPI() {
  const config = getConfig();
  if (config && config.configs && config.configs.length) {
    return generateApi(config);
  }
}

export function pureDefinitions(definitions: ApiDefinitions): ApiDefinitions {
  const res: ApiDefinitions = {};
  Object.keys(definitions).forEach(key => {
    res[pure(key)] = definitions[key];
  });
  return res;
}

export function normalizeName(name: string) {
  if (name.includes('.')) {
    const parts = name.split('.');
    name = parts.map((part, index) => {
      if (index !== 0) {
        return toPascal(part);
      } else {
        return part;
      }
    }).join('');
  }
  name = name.replace('[', '').replace(']', '');
  if (!isNaN(parseInt(name[0]))) {
    name = '_' + name;
  }
  return name;
}

export async function generateApi(config: ApiConfig) {
  const axios = require('axios');
  const requests = [];
  const datas = [];
  for (const c of config.configs) {
    try {
      const request = axios.get(c.url);
      requests.push(request);
      const data = (await request).data;
      datas.push({
        config: c,
        data
      });
    } catch (e) {
      console.error(e);
    }
  }
  const res = generateData(config, datas);
  writeFile(res);
  return requests;
}

class ApiDef {
  private apiDef: Api = null;
  private isAPI: boolean = false;
  private keyPath: string[];
  private name: string = '';
  private subApis: ApiDef[] = [];

  constructor(obj: Api, keyPath: string[] = []) {
    if (obj.url && obj.method) {
      this.isAPI = true;
      this.apiDef = obj;
      this.keyPath = keyPath;
    } else {
      Object.keys(obj).forEach(key => {
        const subObj = obj[key];
        subObj.name = key;
        this.subApis.push(new ApiDef(subObj, [].concat(keyPath).concat([key])));
      });
    }
  }
}

/**
 * 生成类型定义
 * @param {ApiConfig[]} config
 * @param datas
 * @returns {Promise<void>}
 */
export function generateData(config: ApiConfig, datas: Array<{
  config: Config,
  data: SwaggerDoc
}>): APIData {
  const merge = require('lodash.merge');
  config = merge({
    typeRoot: 'src/types',
    apiRoot: 'src/api'
  }, config);
  // 声明的类型
  // 声明的接口
  let beanInterfaces: Interface[] = [];
  let apis: Api[] = [];
  let apiObject: Api = {
    definitionPath: []
  };
  datas.forEach(item => {
    const c = item.config;
    const data = item.data;
    try {
      beanInterfaces = beanInterfaces.concat(generateBeanDefinitions(data.definitions, c));
      const apiData = generateApiDefinitions(data, beanInterfaces, c);
      apis = apis.concat(apiData.apis);
      apiObject = merge(apiObject, apiData.apiObject);
    } catch (e) {
      console.error(e);
    }
  });
  const apiImportList: ImportDeclaration[] = [];
  apiImportList.push(new ImportDeclaration(
      null, beanInterfaces.map(it => it.name.name), `./${beanDefFileName}`
  ));
  return {
    config,
    interfaces: beanInterfaces,
    apiObject,
    imports: apiImportList,
    generatedApisBody: toDefinitionString(apiObject),
    apiInterfaces: resolveAPIInterfaces(apiObject, 0, null, [])
        .map(it => ({name: it.name, body: toDefinitionString(it.value, it.level, it.key)}))
  } as APIData;

  function resolveAPIInterfaces(obj: Api, level: number = 0, parentKey: string = null, interfaces: Array<any> = []) {
    if (typeof obj === 'object') {
      if (obj.method && obj.url) {
      } else {
        const keys = Object.keys(obj);
        if (keys.length) {
          keys.forEach(key => {
            if (key === 'definitionPath') {
              return;
            }
            const value = obj[key];
            if (typeof value === 'object') {
              if (value.method && value.url) {
                resolveAPIInterfaces(value, level + 1, key, interfaces);
              } else {
                if (level === 0) {
                  let name = toPascal(key) + 'API<T>';
                  if (parentKey) {
                    name = toPascal(parentKey) + name;
                  }
                  resolveAPIInterfaces(value, level, key, interfaces);
                  name = normalizeName(name);
                  const existsInterface = interfaces.find(it => it.name === name);
                  if (existsInterface && existsInterface.keyPath) {
                    if (existsInterface.keyPath.join('/') !== obj.definitionPath.join('/')) {
                      name = generateName(
                          name, obj.definitionPath, interfaces.map(it => it.name)
                      );
                    }
                  }
                  interfaces.push({
                    name,
                    value,
                    level,
                    key,
                    keyPath: obj.definitionPath
                  });
                }
              }
            }
          });
        }
      }
    }
    return interfaces;
  }
}

export const generateName = (name: string, keyPath: string[], allNames: string[]) => {
  if (!allNames.includes(name)) {
    return name;
  } else {
    const paths = [].concat(keyPath);
    while (allNames.includes(name) && paths.length) {
      name = normalizeName(toPascal(paths.pop())) + removePrefixDash(name);
    }
    return name;
  }
};

export const removePrefixDash = (name: string) => {
  if (name.indexOf('_') === 0) {
    return removePrefixDash(name.substr(1));
  }
  return name;
};

export interface ApiDefinitionsResult {
  apiObject: {}
  apis: Api[];
}

export interface APIData {
  apiInterfaces: APIInterface[];
  apiObject: object;
  config: ApiConfig;
  generatedApisBody: string;
  imports: ImportDeclaration[];
  interfaces: Interface[];
}

export interface APIInterface {
  body: string;
  name: string;
}
