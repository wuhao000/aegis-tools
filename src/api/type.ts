import {SwaggerResponse} from '../types/swagger';
import {RefObject, resolveRef, resolveRefObject} from './ref';

export const types: Type[] = [];

export function findTypeByEnum(values: any[]): Type | undefined {
  return types.find(t => hasSameItems(t.values, values));
}

export function addType(type: Type) {
  if (!types.some(t => t.name === type.name)
      && !types.some(t => hasSameItems(t.values, type.values))) {
    types.push(type);
  }
}

function hasSameItems(a: any[], b: any[]) {
  if (a.length !== b.length) {
    return false;
  }
  if (a.some(it => !b.includes(it)) || b.some(it => !a.includes(it))) {
    return false;
  }
  return true;
}

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
        : ''}export type ${this.name} =\n    ${this.values.map(v => {
      if (this.type === 'number') {
        return `${v}`;
      } else {
        return `'${v}'`;
      }
    }).join('\n    | ')};`;
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
  } else {
    if (propertyDefinition && propertyDefinition.genericRef) {
      type = propertyDefinition.genericRef.simpleRef;
    } else {
      if (propertyType === 'object') {
        type = 'object';
      }
    }
  }
  return type;
}

export function resolveResponseType(response: SwaggerResponse): RefObject {
  if (response.schema) {
    if (response.schema.genericRef || response.schema.$ref) {
      // 将«»替换为<>
      let ref = pure((response.schema.genericRef && response.schema.genericRef.simpleRef) || response.schema.$ref.replace('#/definitions/', ''));
      return resolveRef(ref);
    } else if (response.schema.items) {
      if (response.schema.items.genericRef && response.schema.items.genericRef.simpleRef) {
        const refObj = resolveRefObject(response.schema.items.genericRef.simpleRef);
        refObj.isEnum = true;
        return refObj;
      } else if (response.schema.items.$ref) {
        const refObj = resolveRefObject(response.schema.items.$ref);
        refObj.isEnum = true;
        return refObj;
      }
      console.error('无法识别response类型：' + JSON.stringify(response));
    }
  }
  return undefined;
}


export function pure(ref): string {
  // if (!/^[a-zA-Z0-9<>\[\],]+$/i.test(res)) {
  //   console.log(res);
  // }
  return ref.replace('#/definitions/', '').replace(/«/g, '<').replace(/»/g, '>');
}
