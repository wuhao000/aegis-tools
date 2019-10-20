#!/usr/bin/env node

import {ApiConfig, Config, getConfig} from './api/config';
import {ApiDefinitions, SwaggerAPI, SwaggerDoc, SwaggerParameter} from '../types/swagger';
import Api, {toDefinitionString} from './api/api';
import {beanDefFileName, writeFile} from './api/file';
import ImportDeclaration from './api/import-declaration';
import Interface from './api/interface';
import Type, {pure, resolveResponseType, resolveType} from './api/type';
import toPascal from './pascal';


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
  const types: Type[] = [];
  // 声明的接口
  let beanInterfaces: Interface[] = [];
  let apis: Api[] = [];
  let apiObject: object = {};
  datas.forEach(item => {
    const c = item.config;
    const data = item.data;
    try {
      beanInterfaces = beanInterfaces.concat(generateBeanDefinitions(data, c));
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
    types,
    interfaces: beanInterfaces,
    apiObject,
    imports: apiImportList,
    generatedApisBody: toDefinitionString(apiObject),
    apiInterfaces: resolveAPIInterfaces(apiObject, 0, null, [])
        .map(it => ({name: it.name, body: toDefinitionString(it.value, it.level, it.key)}))
  } as APIData;

  function generateBeanDefinitions(data: SwaggerDoc, config: Config): Interface[] {
    const definitions = data.definitions;
    const keys = Object.keys(data.definitions);
    const beanInterfaces: Interface[] = [];
    // keys: ['Response«List«SysDic»»', 'Response«List«WorkordersExtraField»»', 'User', ...]
    keys.forEach(key => {
      const definition = definitions[key];
      const inter = new Interface();
      inter.setName(toPascal(pure(key)));
      const propertyDefinitions = definition.properties;
      if (definition.properties) {
        const properties = Object.keys(definition.properties);
        properties.forEach(p => {
          const propertyDefinition = propertyDefinitions[p];
          const propertyType = propertyDefinition.type;
          const type = resolveType(propertyType, propertyDefinition);
          if (!p.includes('-')) {
            let propertyType = pure(type);
            propertyType = propertyType.includes('<') ? 'any' : propertyType;
            let enumType = '';
            if (propertyDefinition.enum) {
              const type = new Type();
              type.name = inter.name + toPascal(p);
              type.type = propertyType;
              type.values = propertyDefinition.enum;
              type.description = propertyDefinition.description;
              if (!types.some(t => t.name === type.name)) {
                types.push(type);
              }
              enumType = type.name;
            }
            inter.properties.push({
              name: p,
              type: enumType ? enumType : propertyType,
              description: propertyDefinition.description ? propertyDefinition.description : ''
            });
          }
        });
        if (!inter.name.includes('Response<') && !inter.name.includes('ResponseSimpleEnum<')) {
          if (inter.name.includes('<')) { // 处理带有泛型的情况
            const typeParameterString = inter.name.substring(inter.name.indexOf('<') + 1, inter.name.length - 1);
            inter.name = inter.name.substring(0, inter.name.indexOf('<'));
            if (config.typeParameterReflects) {
              const reflect = config.typeParameterReflects.find(it => it.name === inter.name);
              if (reflect) {
                const typeChars = ['T', 'S', 'U', 'V', 'P', 'M'];
                const typeParameters = typeParameterString.split(',');
                const properties = typeParameters.map((it, index) => {
                  inter.typeParameters.push(typeChars[index]);
                  const property = inter.properties.find(it => it.name === reflect.typeProperties[index]);
                  if (!property) {
                    throw new Error(`在${reflect.name}上找不到属性${reflect.typeProperties[index]}`);
                  }
                  return property;
                });
                if (!properties.some(it => it.type.includes('<'))) {
                  properties.forEach((property, index) => {
                    if (property.type.endsWith('[]') || property.type.startsWith('Array<')) {
                      property.type = typeChars[index] + '[]';
                    } else {
                      property.type = typeChars[index];
                    }
                  });
                  if (!beanInterfaces.some(it => it.name === inter.name)) {
                    beanInterfaces.push(inter);
                  }
                } else {
                  console.error(`数据类型【${inter.name}】参数【${properties.find(it => it.type.includes('<')).name}】含有泛型，无法解析为泛型关联属性`);
                }
              } else {
                console.error(`数据类型【${inter.name}】包含泛型参数，但是缺少泛型映射配置`);
              }
            } else {
              console.error(`数据类型【${inter.name}】包含泛型参数，但是缺少泛型映射配置`);
            }
          } else {
            if (!beanInterfaces.some(it => it.name === inter.name)) {
              beanInterfaces.push(inter);
            }
          }
        }
      }
    });
    return beanInterfaces;
  }

  function resolveDefinitionPath(path) {
    return path.split('/').filter(p => p.indexOf('{') < 0 && p.length
    ).map(it => {
      return it.split('_').map((it, index) => {
        if (index === 0) {
          return it;
        } else {
          return toPascal(it);
        }
      }).join('');
    });
  }


  function generateApiDefinitions(data: SwaggerDoc,
                                  beanInterfaces: Interface[], config: Config): ApiDefinitionsResult {
    const apis: Api[] = [];
    const definitions = pureDefinitions(data.definitions);
    const paths = Object.keys(data.paths);
    paths.forEach(path => {
      if (config.includes && config.includes.length) {
        if (!config.includes.some(it => it.test(path))) {
          return;
        }
      }
      if (config.excludes && config.excludes.length) {
        if (config.excludes.some(it => it.test(path))) {
          return;
        }
      }
      const pathDefinition = data.paths[path];
      const requestTypes = Object.keys(pathDefinition).map(item => item.toUpperCase());
      requestTypes.forEach(method => {
        if (['GET', 'PUT', 'POST', 'DELETE'].includes(method)) {
          const typeDefinition: SwaggerAPI = pathDefinition[method.toLowerCase()];
          const api = new Api();
          api.url = resolvePath(path);
          api.summary = typeDefinition.summary;
          api.method = method;
          api.id = typeDefinition.operationId;
          // swagger自动生成的api的id格式为 java方法名+Using+请求方式，这里取Using之前的部分，即java方法名
          api.name = api.id.substring(0, api.id.indexOf('Using'));
          // 将接口路径按/分割，并作为自定接口对象的多层次key
          api.definitionPath = resolveDefinitionPath(path);
          api.definitionPath.push(api.name);
          // POST和PUT请求要判断请求的参数格式是json格式还是form表单的格式
          if (['POST', 'PUT'].includes(method)) {
            const nonPathParameters = typeDefinition.parameters && typeDefinition.parameters.filter(it => it.in !== 'path') || [];
            api.isFormData = !(nonPathParameters.length === 1 && nonPathParameters[0].in === 'body');
          }
          const responseType = resolveResponseType(
              typeDefinition.responses['200'], definitions
          );
          if (responseType) {
            api.responseType = responseType;
          }
          if (typeDefinition.parameters && typeDefinition.parameters.length) {
            typeDefinition.parameters.forEach((p: SwaggerParameter) => {
              let enumType = '';
              if (p.enum) {
                const type = new Type();
                type.name = toPascal(api.name) + normalizeName(toPascal(p.name));
                type.values = p.enum;
                type.description = p.description;
                if (!types.some(t => t.name === type.name)) {
                  types.push(type);
                }
                enumType = type.name;
              }
              if (p.in !== 'body') {
                api.parameters.push({
                  name: p.name,
                  required: p.required,
                  type: enumType ? enumType : resolveType(p.type)
                });
              } else {
                if (p.schema.genericRef) {
                  api.bodyParameter = {
                    name: p.name,
                    required: true,
                    type: toPascal(pure(p.schema.genericRef.simpleRef))
                  };
                } else if (p.schema.items) {
                  api.bodyParameter = {
                    name: p.name,
                    required: true,
                    type: 'Array<' + (p.schema.items.genericRef !== undefined ? pure(p.schema.items.genericRef.simpleRef) : 'any') + '>'
                  };
                }
              }
            });
          }
          apis.push(api);
        }
      });
    });
    const apiObject = {};
    apis.forEach(api => {
      let tmp = apiObject;
      api.definitionPath.forEach(dp => {
        if (!tmp[dp]) {
          tmp[dp] = {};
        }
        tmp = tmp[dp];
      });
      Object.assign(tmp, api);
    });
    return {
      apis,
      apiObject
    };
  }

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

  /**
   * 将请求路径中{param}格式的参数转换为:param的形式
   * @param {string} path
   * @return {string}
   */
  function resolvePath(path: string) {
    return path.replace(/{((\w|_)+)}/g, ':$1');
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
  types: Type[];
}

export interface APIInterface {
  body: string;
  name: string;
}
