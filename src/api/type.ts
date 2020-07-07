import {ApiDefinitions, SwaggerResponse} from '../../types/swagger';
import {resolveRef} from './ref';

export default class Type {
  public description: string;
  public name: string;
  public type: string;
  public values: any[];

  constructor() {
    this.name = '';
    this.values = [];
    this.description = '';
    this.type = '';
  }

  toString() {

    return `${this.description ? '/**\n * ' + this.description + '\n */\n'
      : ''}type ${this.name} = ${this.values.map(v => {
      if (this.type === 'number') {
        return `${v}`;
      } else {
        return `'${v}'`;
      }
    }).join(' | ')};`;
  }
}


export function resolveType(propertyType: string, propertyDefinition?) {
  let type = 'any';
  if (['string', 'boolean', 'number'].includes(propertyType)) {
    type = propertyType;
  } else if (['integer', 'number'].includes(propertyType)) {
    type = 'number';
  } else if (propertyType === 'array') {
    if (propertyDefinition) {
      if (propertyDefinition.items.genericRef) {
        type = propertyDefinition.items.genericRef.simpleRef + '[]';
      } else {
        if (propertyDefinition.items.type === 'array') {
          return 'any[]';
        }
        type = resolveType(propertyDefinition.items.type, propertyDefinition) + '[]';
      }
    }
  } else if (propertyType === 'map') {
    if (propertyDefinition.genericType) {
      return resolveRef(pure(propertyDefinition.genericType));
    } else {
      return '{[key: string]: any}';
    }
  } else {
    if (propertyDefinition && propertyDefinition.genericRef) {
      type = propertyDefinition.genericRef.simpleRef;
    } else {
      if (propertyType === 'object') {
        type = 'any';
      }
    }
  }
  return type;
}

export function resolveResponseType(response: SwaggerResponse, definitions: ApiDefinitions) {
  if (response.schema) {
    if (response.schema.genericRef) {
      // 将«»替换为<>
      let ref = pure(response.schema.genericRef.simpleRef);
      return resolveRef(ref);
    } else if (response.schema.items) {
      if (response.schema.items.genericRef.simpleRef) {
        return response.schema.items.genericRef.simpleRef + '[]';
      }
      console.debug('无法识别response类型：');
      console.log(response);
    }
  } else {
  }
  return undefined;
}


export function pure(ref): string {
  // if (!/^[a-zA-Z0-9<>\[\],]+$/i.test(res)) {
  //   console.log(res);
  // }
  return ref.replace(/«/g, '<').replace(/»/g, '>');
}
