import toPascal from '../pascal';
import {BodyParameter} from '../types/api-generate';
import {generateName, normalizeName} from './generate-api';
import {RefObject} from './ref';

export const METHODS_SUPPORT_FORM_DATA = ['POST', 'PUT', 'DELETE'];

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

export default class Api {
  public bodyParameter?: BodyParameter = null;
  public definitionPath: any[];
  public id?: string;
  public isFormData?: boolean;
  public method?: string;
  public name?: string;
  public parameters?: Parameter[];
  public path?: string;
  public responseType?: RefObject;
  public summary?: string;
  public type?: any;
  public url?: string;

  constructor() {
    this.name = '';
    this.summary = '';
    this.definitionPath = [];
    this.id = '';
    this.bodyParameter = null;
    this.url = '';
    this.isFormData = false;
    this.method = '';
    this.parameters = [];
    this.responseType = null;
  }

  public addParameter(param: Parameter) {
    if (param.name.includes('.')) {
      const nameParts = param.name.split('.');
      let parentParam: Parameter = this.parameters.find(it => it.name === nameParts[0]) ||
          new Parameter({
            name: nameParts[0],
            required: param.required,
            type: 'object',
            in: param.in
          });
      if (!this.parameters.some(it => it.name === nameParts[0])) {
        this.addParameter(parentParam);
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
            type: index === nameParts.length - 1 ? param.type : 'object'
          });
          if (param.required) {
            tmpParam.required = true;
          }
          parentParam.addChild(tmpParam);
          parentParam = tmpParam;
        }
      });
    } else if (!this.parameters.some(it => it.name === param.name)) {
      this.parameters.push(param);
    }
  }

  public toString() {
    return `{
    url: ${this.path},
    method: ${this.type},
    errorHandleType: 'custom'
    }`;
  }
}

export function toAPIString(obj) {
  const lines = toAPIString2(obj, 0).split('\n');
  return lines.map((it, index) => index > 0 && index < lines.length - 1 ? `  ${it}` : it).join('\n');
}

export function toAPIString2(obj, level = 0) {
  let str = '';
  const space = ' '.repeat(2 * level);
  if (typeof obj === 'object') {
    str += '{\n';
    const keys = Object.keys(obj);
    if (keys.includes('url') && keys.includes('method')) {
      str += space + `url: '${obj.url}',\n${space}method: '${obj.method}'`;
      if (METHODS_SUPPORT_FORM_DATA.includes(obj.method)) {
        str += `,\n${space}isFormData: ${obj.isFormData}`;
      }
      if (obj.parameters.length === 1 && ['string', 'number'].includes(obj.parameters[0].type)) {
        str += `,\n${space}requestData(${obj.parameters[0].name}: ${obj.parameters[0].type}) {
${space}  return this.r({${obj.parameters[0].name}});
${space}}`;
      }
      str += `\n${' '.repeat(2 * (level - 1))}}`;
    } else {
      str += `${space}${keys.filter(it => it !== 'definitionPath').map(key => {
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

export function toDefinitionString(obj: Api, level: number = 0, parentKey: string = null) {
  let str = '';
  if (typeof obj === 'object') {
    if (obj.method && obj.url) {
      if (obj.parameters.length === 1 && obj.parameters[0].type === 'string') {
        str += 'StringIdAPI<T';
      } else if (obj.parameters.length === 1 && obj.parameters[0].type === 'number') {
        str += 'NumberIdAPI<T';
      } else {
        str += 'GenericAPI<T';
      }
      if (obj.responseType) {
        str += `, ${obj.responseType.toString()}`;
      }
      if (obj.bodyParameter) {
        if (obj.parameters.length) {
          console.error('混合参数无法解析');
        } else {
          str += ', ' + obj.bodyParameter.type;
        }
      } else if (obj.parameters.length) {
        str += ', ' + createParametersType(obj.parameters);
      }
      str += '>';
    } else {
      const space = ' '.repeat(2 * level + 2);
      str += '{';
      const keys = Object.keys(obj);
      if (keys.length) {
        str += `\n${keys.filter(it => it !== 'definitionPath').map((key: string) => {
          const value = obj[key];
          if (typeof value === 'object') {
            if (value.method && value.url) {
              return `${space}/**
${space} * ${value.summary}
${space} */
${space}${normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
            } else {
              if (level === 0) {
                let name = toPascal(key) + 'API<T>';
                if (parentKey) {
                  name = toPascal(parentKey) + name;
                }
                name = normalizeName(name);
                if (apiNames.includes(name)) {
                  name = generateName(name, obj.definitionPath || [], apiNames);
                }
                apiNames.push(name);
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
  return str;
}

const createParametersType = (parameters: Parameter[]) => {
  return `{
${parameters.map(it => it.toString()).join(',\n')}
  }`;
};
