import {config} from './config';
import {normalizeName} from './generate-api';
import {RefObject, resolveRefObject} from './ref';

interface InterfaceProperty {
  description: string;
  name: string;
  type: string;
}

export default class Interface {
  public name: RefObject;
  public properties: InterfaceProperty[];

  constructor() {
    this.name = null;
    this.properties = [];
  }

  get unwrap() {
    return this.name.unwrap;
  }

  public setName(name: string) {
    this.name = resolveRefObject(normalizeName(name));
  }


  get ignore() {
    return this.name.isObjectType || this.name.isArrayType || this.name.isAnyType;
  }

  public toString() {
    return `export interface ${this.name.toString()} {
  ${
        this.properties.map(p => {
          return `${p.description ? `/**
\t * ${p.description.trim()}
\t */
\t` : ''}${this.name.name === 'Account' && p.name === 'id' ? '// @ts-ignore\n\t' : ''}${p.name}?: ${p.type};`;
        }).join('\n\t')
    }
}\n`;
  }
}
