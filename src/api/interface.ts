import {normalizeName} from '../generate-api';

interface InterfaceProperty {
  description: string;
  name: string;
  type: string;
}

export default class Interface {
  public name: string;
  public properties: InterfaceProperty[];
  public typeParameters: string[] = [];

  constructor() {
    this.name = '';
    this.properties = [];
  }

  setName(name: string) {
    this.name = normalizeName(name);
  }

  toString() {
    return `export interface ${this.name}${this.typeParameters && this.typeParameters.length ? (`<${this.typeParameters.join(', ')}>`) : ''} {
  ${
        this.properties.map(p => {
          return `${p.description ? `/**
\t * ${p.description.trim()}
\t */
\t` : ''}${this.name === 'Account' && p.name === 'id' ? '// @ts-ignore\n\t' : ''}${p.name}?: ${p.type};`;
        }).join('\n\t')
        }
}\n`;
  }
}
