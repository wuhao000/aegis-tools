import {Config} from './config';
import {normalizeName} from './generate-api';
import {RefObject, resolveRefObject} from './ref';

export class InterfaceProperty {
  public description: string;
  public name: string;
  private type: RefObject;

  constructor(name: string, type: string, description: string) {
    this.name = name;
    this.type = resolveRefObject(type);
    this.description = description;
  }

  public toString() {
    return `${this.description ? `/**
   * ${this.description.trim()}
   */
  ` : ''}${this.name}?: ${this.type.toString()};`;
  }

  public replaceTypeParameter(typeParameter: RefObject, newTypeParameter: RefObject) {
    this.type.replaceTypeParameter(typeParameter, newTypeParameter);
  }
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
    if (this.properties.length) {
      return `export interface ${this.name.toString()} {
  ${this.properties.map(p => p.toString()).join('\n  ')}
}\n`;
    } else {
      return `export interface ${this.name.toString()} {}\n`;
    }
  }

  public getReflectProperty(config: Config, index: number) {
    if (config.typeParameterReflects) {
      const reflect = config.typeParameterReflects.find(it => it.name === this.name.name);
      if (reflect) {
        return this.properties.find(it => it.name === reflect.typeProperties[index]);
      }
    }
    return undefined;
  }


  resolveTypeParameters(config: Config) {
    this.name.typeParameters = this.name.typeParameters.map((typeParameter, index) => {
      const typeChars = ['T', 'S', 'U', 'V', 'P', 'M'];
      const newTypeParameter = new RefObject(typeChars[index]);
      const property = this.getReflectProperty(config, index);
      if (property) {
        property.replaceTypeParameter(typeParameter, newTypeParameter);
      } else {
        this.properties.forEach(property => {
          property.replaceTypeParameter(typeParameter, newTypeParameter);
        });
        if (config.log.includes('warn')) {
          console.warn(`数据类型【${this.name}】包含泛型参数，但是缺少泛型映射配置，可能导致泛型映射不准确`);
        }
      }
      return newTypeParameter;
    });
  }
}
