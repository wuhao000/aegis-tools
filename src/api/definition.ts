import toPascal from '../pascal';
import {ApiDefinition, ApiDefinitions, SwaggerAPI, SwaggerDoc, SwaggerParameter} from '../types/swagger';
import Api, {BodyParameter, METHODS_SUPPORT_FORM_DATA, Parameter} from './api';
import {ModuleConfig} from './config';
import {ApiDefinitionsResult, normalizeName} from './generate-api';
import Interface, {InterfaceProperty} from './interface';
import Type, {addType, findTypeByEnum, pure, resolveResponseType, resolveType} from './type';

export function generateBeanDefinitions(definitions: ApiDefinitions, config: ModuleConfig): Interface[] {
  const keys = Object.keys(definitions);
  const beanInterfaces: Interface[] = [];

  // keys: ['Response«List«SysDic»»', 'Response«List«WorkordersExtraField»»', 'User', ...]
  function addInterface(inter: Interface) {
    if (!beanInterfaces.some(it => it.name.name === inter.name.name) && !inter.ignore) {
      beanInterfaces.push(inter);
    }
  }

  keys.forEach(key => {
    const definition: ApiDefinition = definitions[key];
    const inter = new Interface();
    inter.setName(toPascal(pure(key)));
    const propertyDefinitions = definition.properties;

    if (definition.properties) {
      const properties = Object.keys(definition.properties);
      properties.forEach(prop => {
        const propertyDefinition = propertyDefinitions[prop];
        const propertyType = pure(propertyDefinition.type);
        const type = resolveType(propertyType, propertyDefinition);
        if (!prop.includes('-')) {
          let enumType = '';
          if (propertyDefinition.enum) {
            let enumItemType = findTypeByEnum(propertyDefinition.enum);
            if (!enumItemType) {
              enumItemType = new Type();
              enumItemType.name = inter.name + toPascal(prop);
              enumItemType.setType(propertyType);
              enumItemType.values = propertyDefinition.enum;
              enumItemType.description = propertyDefinition.description;
              addType(enumItemType);
            }
            enumType = enumItemType.name;
          }
          inter.properties.push(new InterfaceProperty(
              prop,
              enumType ? enumType : type,
              propertyDefinition.description ? propertyDefinition.description : ''
          ));
        }
      });
      if (!inter.unwrap) {
        if (inter.name.typeParameters.length) { // 处理带有泛型的情况
          inter.resolveTypeParameters(config);
          addInterface(inter);
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


export function resolveParameter(p: SwaggerParameter, api: Api, config: ModuleConfig): Parameter {
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
    return new Parameter({
      name: p.name,
      in: p.in,
      description: p.description,
      default: p.default,
      format: p.format,
      required: p.required,
      type: enumType ? enumType : resolveType(p.type, p)
    });
  } else {
    if (p.schema.$ref || p.schema.genericRef) {
      return new BodyParameter({
        name: p.name,
        required: true,
        type: toPascal(pure(p.schema.$ref || p.schema.genericRef.simpleRef))
      });
    } else if (p.schema.items) {
      return new BodyParameter({
        name: p.name,
        required: true,
        type: 'Array<' + (p.schema.items.genericRef !== undefined ? pure(p.schema.items.genericRef.simpleRef) : 'any') + '>'
      });
    } else {
      if (p.schema.type === 'string') {
        return new Parameter({
          name: p.name,
          description: p.description,
          default: p.default,
          format: p.format,
          required: p.required,
          type: 'string'
        });
      } else {
        if (config.log.includes('error')) {
          console.error(`接口${api.__url}存在无法识别的参数${p.name}`);
        }
      }
    }
  }
}

export function generateApiDefinitions(data: SwaggerDoc,
                                       beanInterfaces: Interface[], config: ModuleConfig): ApiDefinitionsResult {
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
        if (api.__responseType && api.__responseType.toString() === 'PageVo') {
          console.log(
              typeDefinition.responses['200']
          )
        }
        if (typeDefinition.parameters && typeDefinition.parameters.length) {
          typeDefinition.parameters.forEach((p: SwaggerParameter) => {
            const parameter = resolveParameter(p, api, config);
            if (parameter instanceof BodyParameter) {
              api.__setBodyParameter(parameter);
            } else if (parameter) {
              api.__addParameter(parameter)
            }
          });
        }
        apis.push(api);
      }
    });
  });
  const apiObject = {};
  // todo __definitionPath 有问题
  apis.forEach(api => {
    let tmp: any = apiObject;
    if (api.__definitionPath.length) {
      api.__definitionPath.forEach((dp, index) => {
        if (!tmp[dp]) {
          tmp[dp] = {
            __definitionPath: api.__definitionPath.slice(0, index)
          };
        }
        if (index === api.__definitionPath.length - 1) {
          Object.keys(tmp[dp]).forEach(key => {
            api[key] = tmp[dp][key];
          });
          tmp.__definitionPath = api.__definitionPath.slice(0, api.__definitionPath.length - 1)
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
