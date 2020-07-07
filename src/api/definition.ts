import toPascal from '../pascal';
import {ApiDefinitions, SwaggerAPI, SwaggerDoc, SwaggerParameter} from '../types/swagger';
import Api, {DEFINITION_PATH_KEY, METHODS_SUPPORT_FORM_DATA, Parameter} from './api';
import {Config} from './config';
import {ApiDefinitionsResult, normalizeName} from './generate-api';
import Interface from './interface';
import {RefObject} from './ref';
import Type, {addType, findTypeByEnum, pure, resolveResponseType, resolveType} from './type';

export function generateBeanDefinitions(definitions: ApiDefinitions, config: Config): Interface[] {
  const keys = Object.keys(definitions);
  const beanInterfaces: Interface[] = [];

  // keys: ['Response«List«SysDic»»', 'Response«List«WorkordersExtraField»»', 'User', ...]
  function addInterface(inter: Interface) {
    if (!beanInterfaces.some(it => it.name.name === inter.name.name) && !inter.ignore) {
      beanInterfaces.push(inter);
    }
  }

  keys.forEach(key => {
    const definition = definitions[key];
    const inter = new Interface();
    inter.setName(toPascal(pure(key)));
    const propertyDefinitions = definition.properties;
    if (definition.properties) {
      const properties = Object.keys(definition.properties);
      properties.forEach(prop => {
        const propertyDefinition = propertyDefinitions[prop];
        const propertyType = propertyDefinition.type;
        const type = resolveType(propertyType, propertyDefinition);
        if (!prop.includes('-')) {
          let propertyType = pure(type);
          propertyType = propertyType.includes('<') ? 'any' : propertyType;
          let enumType = '';
          if (propertyDefinition.enum) {
            let type = findTypeByEnum(propertyDefinition.enum);
            if (!type) {
              type = new Type();
              type.name = inter.name + toPascal(prop);
              type.type = propertyType;
              type.values = propertyDefinition.enum;
              type.description = propertyDefinition.description;
              addType(type);
            }
            enumType = type.name;
          }
          inter.properties.push({
            name: prop,
            type: enumType ? enumType : propertyType,
            description: propertyDefinition.description ? propertyDefinition.description : ''
          });
        }
      });
      if (!inter.unwrap) {
        if (inter.name.typeParameters.length) { // 处理带有泛型的情况
          if (config.typeParameterReflects) {
            const reflect = config.typeParameterReflects.find(it => it.name === inter.name.name);
            if (reflect) {
              const typeChars = ['T', 'S', 'U', 'V', 'P', 'M'];
              const typeParameters = inter.name.typeParameters;
              const properties = typeParameters.map((it, index) => {
                inter.name.typeParameters[index] = new RefObject(typeChars[index]);
                const property = inter.properties.find(it => it.name === reflect.typeProperties[index]);
                if (!property) {
                  throw new Error(`在${reflect.name}上找不到属性${reflect.typeProperties[index]}, 存在的属性：${inter.properties.map(it => it.name)}`);
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
                addInterface(inter);
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
          addInterface(inter);
        }
      }
    } else {
      addInterface(inter);
    }
  });
  return beanInterfaces;
}


export function generateApiDefinitions(data: SwaggerDoc,
                                       beanInterfaces: Interface[], config: Config): ApiDefinitionsResult {
  const apis: Api[] = [];
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
        api.__url = resolvePath(path);
        api.__summary = typeDefinition.summary;
        api.__method = method;
        api.__id = typeDefinition.operationId;
        // swagger自动生成的api的id格式为 java方法名+Using+请求方式，这里取Using之前的部分，即java方法名
        api.__name = api.__id.substring(0, api.__id.indexOf('Using'));
        // 将接口路径按/分割，并作为自定接口对象的多层次key
        const resolvedPath = resolveDefinitionPath(path);
        if (resolvedPath.length > 0 && resolvedPath[resolvedPath.length - 1] === api.__name) {
          api.__definitionPath = resolvedPath.slice(0, resolvedPath.length - 1);
        } else {
          api.__definitionPath = resolvedPath;
        }
        api.__definitionPath.push(api.__name);
        // POST和PUT请求要判断请求的参数格式是json格式还是form表单的格式
        if (METHODS_SUPPORT_FORM_DATA.includes(method)) {
          const nonPathParameters = typeDefinition.parameters && typeDefinition.parameters.filter(it => it.in !== 'path') || [];
          api.__isFormData = !(nonPathParameters.length === 1 && nonPathParameters[0].in === 'body');
        }
        api.__responseType = resolveResponseType(
            typeDefinition.responses['200']
        );
        if (typeDefinition.parameters && typeDefinition.parameters.length) {
          typeDefinition.parameters.forEach((p: SwaggerParameter) => {
            let enumType = '';
            if (p.enum) {
              let type = findTypeByEnum(p.enum);
              if (!type) {
                type = new Type();
                type.name = toPascal(api.__name) + normalizeName(toPascal(p.name));
                type.values = p.enum;
                type.description = p.description;
                addType(type);
              }
              enumType = type.name;
            }
            if (p.in !== 'body') {
              api.__addParameter(new Parameter({
                name: p.name,
                in: p.in,
                description: p.description,
                default: p.default,
                format: p.format,
                required: p.required,
                type: enumType ? enumType : resolveType(p.type)
              }));
            } else {
              if (p.schema.$ref || p.schema.genericRef) {
                api.__setBodyParameter(new Parameter({
                  name: p.name,
                  required: true,
                  type: toPascal(pure(p.schema.$ref || p.schema.genericRef.simpleRef))
                }));
              } else if (p.schema.items) {
                api.__setBodyParameter(new Parameter({
                  name: p.name,
                  required: true,
                  type: 'Array<' + (p.schema.items.genericRef !== undefined ? pure(p.schema.items.genericRef.simpleRef) : 'any') + '>'
                }));
              } else {
                if (p.schema.type === 'string') {
                  api.__addParameter(new Parameter({
                    name: p.name,
                    description: p.description,
                    default: p.default,
                    format: p.format,
                    required: p.required,
                    type: 'string'
                  }));
                } else {
                  console.error(`接口${api.__url}存在无法识别的参数${p.name}`);
                }
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
    if (api.__definitionPath.length){
      api.__definitionPath.forEach((dp, index) => {
        if (!tmp[dp]) {
          tmp[dp] = {};
        }
        if (index === api.__definitionPath.length - 1) {
          Object.keys(tmp[dp]).forEach(key => {
            api[key] = tmp[dp][key]
          });
          tmp[dp] = api;
        } else {
          tmp = tmp[dp];
        }
      });
    }
  });
  return {
    apis,
    apiObject
  };
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

/**
 * 将请求路径中{param}格式的参数转换为:param的形式
 * @param {string} path
 * @return {string}
 */
function resolvePath(path: string) {
  return path.replace(/{((\w|_)+)}/g, ':$1');
}
