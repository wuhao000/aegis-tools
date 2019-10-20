#!/usr/bin/env node

import {ApiDefinitions, SwaggerDoc} from '../../types/swagger';
import toPascal from '../pascal';
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
  let apiObject: any = {};
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
      null, beanInterfaces.map(it => it.name), `./${beanDefFileName}`
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

  function resolveAPIInterfaces(obj: any, level: number = 0, parentKey: string = null, interfaces: Array<any> = []) {
    if (typeof obj === 'object') {
      if (obj.method && obj.url) {
      } else {
        const keys = Object.keys(obj);
        if (keys.length) {
          keys.forEach(key => {
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
                  interfaces.push({
                    name,
                    value,
                    level,
                    key
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
