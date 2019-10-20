import {BodyParameter} from '../../types/api-generate';
import toPascal from '../pascal';
import {normalizeName} from './generate-api';

export default class Api {
  public bodyParameter: BodyParameter = null;
  public definitionPath: any[];
  public id: string;
  public isFormData: boolean;
  public method: string;
  public name: string;
  public parameters: any[];
  public path: string;
  public responseType: string;
  public summary: string;
  public type: any;
  public url: string;

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
    this.responseType = '';
  }

  toString() {
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
      if (['POST', 'PUT'].includes(obj.method)) {
        str += `,\n${space}isFormData: ${obj.isFormData}`;
      }
      if (obj.parameters.length === 1 && ['string', 'number'].includes(obj.parameters[0].type)) {
        str += `,\n${space}requestData(${obj.parameters[0].name}: ${obj.parameters[0].type}) {
${space}  return this.r({${obj.parameters[0].name}});
${space}}`;
      }
      str += `\n${' '.repeat(2 * (level - 1))}}`;
    } else {
      str += `${space}${keys.map(key => {
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
        str += `, ${obj.responseType}`;
      }
      if (obj.bodyParameter && obj.parameters.length) {
        // console.error('混合参数无法解析');
      } else if (obj.bodyParameter) {
        str += ', ' + obj.bodyParameter.type;
      }
      str += '>';
    } else {
      const space = ' '.repeat(2 * level + 2);
      str += '{';
      const keys = Object.keys(obj);
      if (keys.length) {
        str += `\n${keys.map((key: string) => {
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
                return `\t${normalizeName(key)}: ${name}`;
              } else {
                return `\t${normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
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
