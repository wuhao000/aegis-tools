import toPascal from '../pascal';
import {BodyParameter} from '../types/api-generate';
import {generateName, isApiObject, normalizeName} from './generate-api';
import {RefObject} from './ref';

export const METHODS_SUPPORT_FORM_DATA = ['POST', 'PUT', 'DELETE'];

export const isApiProperty = (str: string) => {
  return str.indexOf('__') === 0;
};

export class Parameter {
  public children: Parameter[] = [];
  public default?: any;
  public description?: string;
  public format?: string;
  public in: string;
  public name: string;
  public required: boolean;
  public type: string;

  constructor(props) {
    Object.assign(this, props);
    if (this.name.endsWith('[0]')) {
      this.name = this.name.substr(0, this.name.length - 3);
      this.type = this.type + '[]';
    }
  }

  public addChild(parameter: Parameter) {
    if (!this.children.some(it => it.name === parameter.name)) {
      this.children.push(parameter);
    }
  }

  public toString() {
    let str = '    ';
    if (this.description) {
      str += `/**
     * ${this.description}
     */
    `;
    }
    str += this.name;
    if (!this.required) {
      str += '?';
    }
    str += ': ';
    if (this.children.length) {
      str += `{
${this.children.map(it => it.toString()).join(',\n')}
    }`;
    } else {
      str += this.type;
    }
    return str;
  }
}

export const DEFINITION_PATH_KEY = '__definitionPath';

export default class Api {
  public __bodyParameter?: BodyParameter = null;
  public __definitionPath: any[];
  public __id?: string;
  public __isFormData?: boolean;
  public __method?: string;
  public __name?: string;
  public __parameters?: Parameter[];
  public __path?: string;
  public __responseType?: RefObject;
  public __summary?: string;
  public __type?: any;
  public __url?: string;
  public __subApiName?: string;

  constructor() {
    this.__name = '';
    this.__summary = '';
    this.__definitionPath = [];
    this.__id = '';
    this.__bodyParameter = null;
    this.__url = '';
    this.__isFormData = false;
    this.__method = '';
    this.__parameters = [];
    this.__responseType = null;
  }

  public __addParameter(param: Parameter) {
    if (param.name.includes('.')) {
      const nameParts = param.name.split('.');
      let parentParam: Parameter = this.__parameters.find(it => it.name === nameParts[0]) ||
        new Parameter({
          name: nameParts[0],
          required: param.required,
          type: 'any',
          in: param.in
        });
      if (!this.__parameters.some(it => it.name === nameParts[0])) {
        this.__addParameter(parentParam);
      }
      if (param.required) {
        parentParam.required = true;
      }
      nameParts.forEach((part, index) => {
        if (index > 0) {
          const tmpParam = new Parameter({
            name: part,
            in: param.in,
            required: param.required,
            type: index === nameParts.length - 1 ? param.type : 'any'
          });
          if (param.required) {
            tmpParam.required = true;
          }
          parentParam.addChild(tmpParam);
          parentParam = tmpParam;
        }
      });
    } else if (!this.__parameters.some(it => it.name === param.name)) {
      this.__parameters.push(param);
    }
  }

  public __getType() {
    let str = '';
    if (this.__parameters.length === 1 && this.__parameters[0].type === 'string') {
      str += 'StringIdAPI<T';
    } else if (this.__parameters.length === 1 && this.__parameters[0].type === 'number') {
      str += 'NumberIdAPI<T';
    } else {
      str += 'GenericAPI<T';
    }
    str += ', ' + this.__getResponseType();
    str += ', ' + this.__getParameterType();
    str += '>';
    return str;
  }

  public __getResponseType(): string {
    if (this.__responseType) {
      return this.__responseType.toString();
    }
    return 'any';
  }

  public __getParameterType(): string {
    if (this.__bodyParameter) {
      if (this.__parameters.length) {
        console.error('混合参数无法解析');
        return 'any';
      } else {
        return this.__bodyParameter.type;
      }
    } else if (this.__parameters.length) {
      return createParametersType(this.__parameters);
    }
    return 'never';
  }

  public toString() {
    return `{
    url: ${this.__path},
    method: ${this.__type},
    errorHandleType: 'custom'
    }`;
  }

  public __setBodyParameter(parameter: Parameter) {
    this.__bodyParameter = parameter;
  }
}

export function toAPIString(obj) {
  const lines = toAPIString2(obj, 0).split('\n');
  return lines.map((it, index) => index > 0 && index < lines.length - 1 ? `  ${it}` : it).join('\n');
}

export function hasSubApis(obj: Api): boolean {
  return Object.keys(obj).filter(it => !isApiProperty(it)).length > 0;
}

function getSubApis(obj: Api): { [key: string]: Api } {
  const o = {};
  Object.keys(obj).filter(it => !isApiProperty(it)).forEach(key => {
    o[key] = obj[key];
  });
  return o;
}

export function toAPIString2(obj: Api, level = 0) {
  let str = '';
  const space = ' '.repeat(2 * level);
  if (typeof obj === 'object') {
    str += '{\n';
    const keys = Object.keys(obj);
    if (isApiObject(obj)) {
      str += space + `url: '${obj.__url}',\n${space}method: '${obj.__method}'`;
      if (METHODS_SUPPORT_FORM_DATA.includes(obj.__method)) {
        str += `,\n${space}isFormData: ${obj.__isFormData}`;
      }
      if (!hasSubApis(obj) && obj.__parameters.length === 1 && ['string', 'number'].includes(obj.__parameters[0].type)) {
        str += `,\n${space}requestData(${obj.__parameters[0].name}: ${obj.__parameters[0].type}) {
${space}  return this.r({${obj.__parameters[0].name}});
${space}}`;
      }
      const subApis = getSubApis(obj);
      if (Object.keys(subApis).length) {
        Object.keys(subApis).forEach(key => {
          str += `,\n${space}${key}: ${toAPIString2(subApis[key], level + 1)}`;
        });
      }
      str += `\n${' '.repeat(2 * (level - 1))}}`;
    } else {
      str += `${space}${keys.filter(it => !isApiProperty(it)).map(key => {
        const value = obj[key];
        if (typeof value === 'object') {
          return `${normalizeName(key)}: ${toAPIString2(value, level + 1)}`;
        } else if (['number', 'boolean'].includes(typeof value)) {
          return `${normalizeName(key)}: ${value}`;
        } else {
          return `${normalizeName(key)}: '${value}'`;
        }
      }).join(',\n' + space)}`;
      if (level > 0) {
        str += `\n${' '.repeat(2 * (level - 1))}}`;
      } else {
        str += `\n${space}}`;
      }
    }
  }
  return str;
}

const apiNames = [];

function createApiDefinitionInterfaceName(key: string, parentKey: string, obj: Api) {
  let name = toPascal(key) + 'API<T>';
  if (parentKey) {
    name = toPascal(parentKey) + name;
  }
  name = normalizeName(name);
  if (apiNames.includes(name)) {
    name = generateName(name, obj.__definitionPath || [], apiNames);
  }
  apiNames.push(name);
  return name;
}

export function toDefinitionString(obj: Api, level: number = 0, parentKey: string = null) {
  let str = '';
  if (typeof obj === 'object') {
    if (isApiObject(obj) && !hasSubApis(obj)) {
      str += obj.__getType();
    } else {
      if (isApiObject(obj) && level !== 0) {
        str += obj.__subApiName;
      } else {
        const space = ' '.repeat(2 * level + 2);
        str += '{';
        const keys = Object.keys(obj);
        if (keys.length) {
          str += `\n${keys.filter(it => !isApiProperty(it)).map((key: string) => {
            const value: Api = obj[key];
            if (typeof value === 'object') {
              if (isApiObject(value)) {
                return `${space}/**
${space} * ${value.__summary}
${space} */
${space}${normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
              } else {
                if (level === 0) {
                  let name = createApiDefinitionInterfaceName(key, parentKey, obj);
                  return `  ${normalizeName(key)}: ${name}`;
                } else {
                  return `  ${normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
                }
              }
            } else {
              return `${normalizeName(key)}: '${value}'`;
            }
          }).join(`;\n${' '.repeat(2 * level)}`)};\n`;
        }
        str += ' '.repeat(2 * level) + '}';
      }
    }
  }
  return str;
}

const createParametersType = (parameters: Parameter[]) => {
  return `{
${parameters.map(it => it.toString()).join(',\n')}
  }`;
};
