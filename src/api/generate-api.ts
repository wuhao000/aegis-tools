import toPascal from '../pascal';
import {SwaggerDoc} from '../types/swagger';
import Api, {hasSubApis, isApiProperty, toDefinitionString} from './api';
import {ApiConfig, getConfig, ModuleConfig} from './config';
import {generateApiDefinitions, generateBeanDefinitions} from './definition';
import {beanDefFileName, writeFile} from './file';
import ImportDeclaration from './import-declaration';
import Interface from './interface';
import {types} from './type';

export function generateAPI() {
  const config = getConfig();
  if (config && config.configs && config.configs.length) {
    return generateApi(config);
  }
}

/**
 * 1.将包含.的名称转换为帕斯卡命名的名称
 * 2.如果名称中包含中括号，转换成_连接的形式
 * @param {string} name
 * @return {string}
 */
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
  for (const c of config.configs) {
    const moduleConfig = Object.assign({
      apiRoot: config.apiRoot,
      templates: config.templates,
      typeRoot: config.typeRoot,
      typesAsAny: config.typesAsAny,
      typesAsVoid: config.typesAsVoid,
      log: config.log || ['error']
    }, c);
    try {
      const request = axios.get(moduleConfig.url);
      requests.push(request);
      const data = (await request).data;
      const res = generateData(moduleConfig, data);
      writeFile(res);
      console.log(`${moduleConfig.name || ''}生成API完成`);
    } catch (e) {
      console.error(e);
    }
  }

  return requests;
}

class ApiDef {
  private apiDef: Api = null;
  private isAPI: boolean = false;
  private keyPath: string[];
  private name: string = '';
  private subApis: ApiDef[] = [];

  constructor(obj: Api, keyPath: string[] = []) {
    if (obj.__url && obj.__method) {
      this.isAPI = true;
      this.apiDef = obj;
      this.keyPath = keyPath;
    } else {
      Object.keys(obj).forEach(key => {
        const subObj = obj[key];
        subObj.name = key;
        const kp = [].concat(...keyPath);
        kp.push(key);
        this.subApis.push(new ApiDef(subObj, kp));
      });
    }
  }
}

export function isApiObject(obj: Api) {
  return obj.__method && obj.__url;
}

/**
 * 生成类型定义
 * @returns {Promise<void>}
 */
export function generateData(config: ModuleConfig, data: SwaggerDoc): APIData {
  const merge = require('lodash.merge');
  config = merge({
    typeRoot: 'src/types',
    apiRoot: 'src/api'
  }, config);
  // 声明的类型
  // 声明的接口
  let beanInterfaces: Interface[] = [];
  let apis: Api[] = [];
  // @ts-ignore
  let apiObject: Api = {
    __definitionPath: []
  };
  try {
    if (data.definitions) {
      beanInterfaces = beanInterfaces.concat(generateBeanDefinitions(data.definitions, config));
    }
    const apiData = generateApiDefinitions(data, beanInterfaces, config);
    apis = apis.concat(apiData.apis);
    apiObject = merge(apiObject, apiData.apiObject);
  } catch (e) {
    console.error(e);
  }
  const apiImportList: ImportDeclaration[] = [];
  apiImportList.push(new ImportDeclaration(
    null, types.map(it => it.name).concat(beanInterfaces.map(it => it.name.name)), `./${beanDefFileName}${config.name ? `-${config.name}` : ''}`
  ));
  const body = toDefinitionString(apiObject);
  const apiInterfaces = resolveAPIInterfaces(apiObject, 0, [], []);
  return {
    config,
    interfaces: beanInterfaces,
    apiObject,
    imports: apiImportList,
    apis,
    generatedApisBody: body,
    apiInterfaces: apiInterfaces.map(it => ({
      name: it.name,
      extendsApi: it.extendsApi,
      body: toDefinitionString(it.value, it.level, it.keyPath)
    }))
  } as APIData;

  function resolveAPIInterfaces(obj: Api, level: number = 0, parentKey: string[] = [], interfaces: Array<any> = []) {
    if (typeof obj === 'object') {
      if (hasSubApis(obj)) {
        const keys = Object.keys(obj).filter(it => !isApiProperty(it));
        if (keys.length) {
          keys.forEach(key => {
            const value: Api = obj[key];
            if (typeof value === 'object') {
              if (isApiObject(value) && !hasSubApis(value)) {
                resolveAPIInterfaces(value, level + 1, parentKey.concat(key), interfaces);
              } else {
                let name = toPascal(key) + 'API<T>';
                if (parentKey.length) {
                  name = parentKey.map(it => toPascal(it)).join('') + name;
                }
                resolveAPIInterfaces(value, level, parentKey.concat(key), interfaces);
                name = normalizeName(name);
                const existsInterface = interfaces.find(it => it.name === name);
                if (existsInterface && existsInterface.keyPath && obj.__definitionPath) {
                  if (existsInterface.keyPath.join('/') !== obj.__definitionPath.join('/')) {
                    name = generateName(
                      name, obj.__definitionPath, interfaces.map(it => it.name)
                    );
                  }
                }
                if (value instanceof Api) {
                  value.__subApiName = name;
                }

                interfaces.push({
                  name,
                  value,
                  level,
                  key,
                  extendsApi: value instanceof Api ? `API<${value.__getResponseType()}, ${value.__getParameterType()}>` : null,
                  keyPath: obj.__definitionPath
                });
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
  apis: Api[];
  config: ModuleConfig;
  generatedApisBody: string;
  imports: ImportDeclaration[];
  interfaces: Interface[];
}

export interface APIInterface {
  body: string;
  name: string;
  extendsApi: boolean;
}
