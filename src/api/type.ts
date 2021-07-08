import toPascal from '../pascal';
import {normalizeName} from './generate-api';
import {RefObject, resolveRef, resolveRefObject} from './ref';
import {ItemsType, SwaggerParameter, SwaggerResponse} from '@/types/swagger';

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
  return !(a.some(it => !b.includes(it)) || b.some(it => !a.includes(it)));

}

export default class Type {
  public description: string;
  public name: string;
  public type: RefObject;
  public values: any[];

  constructor() {
    this.name = '';
    this.values = [];
    this.description = '';
    this.type = new RefObject('any');
  }

  public toString() {
    return `${this.description ? '/**\n * ' + this.description + '\n */\n'
      : ''}export type ${this.name} = ${this.values.map(v => {
      if (['number', 'integer'].includes(this.type.name)) {
        return `${v}`;
      } else {
        return `'${v}'`;
      }
    }).join('\n    | ')};`;
  }

  public setType(propertyType: string) {
    this.type = resolveRefObject(propertyType);
  }

  public getType() {
    return this.type;
  }
}

export function resolveType(propertyType: string,
                            propertyDefinition?: SwaggerParameter | any): string {
  let type = 'any';
  if (['string', 'boolean', 'number'].includes(propertyType)) {
    type = propertyType;
  } else if (['integer', 'number'].includes(propertyType)) {
    type = 'number';
  } else if (propertyType === 'array') {
    if (propertyDefinition) {
      if (propertyDefinition.items.$ref) {
        type = `Array<${pure(propertyDefinition.items.$ref)}>`;
      } else if (propertyDefinition.items.genericRef) {
        type = `Array<${propertyDefinition.items.genericRef.simpleRef}>`;
      } else if (propertyDefinition.items.type) {
        type = `Array<${resolveType(propertyDefinition.items.type)}>`;
      } else {
        if (propertyDefinition.items.type === 'array') {
          return 'Array<any>';
        }
        type = resolveType(propertyDefinition.items.type, propertyDefinition) + '[]';
      }
    } else {
      type = 'Array<any>';
    }
  } else if (propertyType === 'map') {
    if (propertyDefinition.genericType) {
      return resolveRef(pure(propertyDefinition.genericType)).toString();
    } else {
      return '{[key: string]: any}';
    }
  } else {
    if (propertyDefinition && propertyDefinition.$ref) {
      type = pure(propertyDefinition.$ref);
    } else if (propertyDefinition && propertyDefinition.genericRef) {
      type = propertyDefinition.genericRef.simpleRef;
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
        const enumRef = resolveRefObject(response.schema.items.genericRef.simpleRef);
        const ref = new RefObject(null);
        ref.isEnum = true;
        ref.typeParameters.push(enumRef)
        return ref;
      } else if (response.schema.items.$ref) {
        const enumRef = resolveRefObject(response.schema.items.$ref);
        const ref = new RefObject(null);
        ref.isEnum = true;
        ref.typeParameters.push(enumRef)
        return ref;
      }
      console.error('无法识别response类型：' + JSON.stringify(response));
    }
  }
  return undefined;
}

export function pure(ref: string): string {
  if (ref === undefined || ref === null) {
    return ref;
  }
  return ref.replace('#/definitions/', '').replace(/«/g, '<').replace(/»/g, '>');
}
