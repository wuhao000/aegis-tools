import {config} from './config';

/**
 * 解析swagger中的类型对应的ts类型
 */
export function resolveRef(ref: string): RefObject {
  const obj = resolveRefObject(ref);
  if (obj.unwrap) {
    return obj.typeParameters[0];
  } else {
    return obj;
  }
}

function isLetter(c: string) {
  return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

const refConfig = {
  arrayTypes: ['List', 'Iterable', 'ArrayList', 'LinkedList'],
  objectTypes: ['Map', 'HashMap', 'TreeMap'],
  numberTypes: ['int', 'long', 'double', 'float']
};

export function isObjectType(name: string): boolean {
  return refConfig.objectTypes.includes(name);
}

export function isArrayType(name: string): boolean {
  return refConfig.arrayTypes.includes(name);
}

export class RefObject {
  public name: string;
  public parent: RefObject;
  public typeParameters: Array<RefObject>;
  public isEnum: boolean = false;

  public constructor(p1: string | RefObject, p2?: RefObject) {
    if (p2) {
      this.name = p1 as string;
      this.parent = p2;
    } else if (p1) {
      if (typeof p1 === 'string') {
        this.name = p1;
      } else {
        this.parent = p1;
      }
    }
    this.typeParameters = [];
  }

  get unwrap() {
    if (config.unwrapTypes) {
      return config.unwrapTypes.includes(this.name);
    }
    return false;
  }

  get isArrayType() {
    return isArrayType(this.name) || this.isEnum;
  }

  get isObjectType() {
    return isObjectType(this.name);
  }

  get isAnyType() {
    return config.typesAsAny && config.typesAsAny.includes(this.name) || this.name === 'object';
  }

  get isVoidType() {
    return config.typesAsVoid && config.typesAsVoid.includes(this.name);
  }

  public toString() {
    if (this.isArrayType) {
      if (this.typeParameters.length >= 1) {
        if (this.typeParameters.length > 1) {
          console.error(`数组类型【${this.name}】只允许有一个泛型参数`);
        }
        if (this.typeParameters[0].typeParameters.length === 0) {
          return `${this.typeParameters[0].toString()}[]`;
        }
        return `Array<${this.typeParameters[0].toString()}>`;
      } else {
        return 'any[]';
      }
    } else if (this.isObjectType) {
      if (this.typeParameters.length >= 2) {
        if (this.typeParameters.length > 2) {
          console.error(`对象类型【${this.name}】只允许有2个泛型参数`);
        }
        return `{[key: ${this.typeParameters[0].toString()}]: ${this.typeParameters[1].toString()}}`;
      } else {
        return `{[key: string]: unknown}`;
      }
    } else if (this.typeParameters.length) {
      return `${this.name}<${this.typeParameters.map(it => it.toString()).join(', ')}>`;
    } else if (this.isVoidType) {
      return 'void';
    } else if (this.isAnyType) {
      return 'any';
    } else if (refConfig.numberTypes.includes(this.name)) {
      return 'number';
    } else if (['String', 'Boolean'].includes(this.name)) {
      return this.name.toLowerCase();
    } else {
      if (this.name === 'Array') {
        return 'Array<any>';
      }
      return this.name;
    }
  }

  replaceTypeParameter(typeParameter: RefObject, newTypeParameter: RefObject) {
    if (this.toString() === typeParameter.toString()) {
      Object.keys(newTypeParameter).forEach(key => {
        this[key] = newTypeParameter[key];
      });
    } else {
      this.typeParameters.forEach(it => {
        it.replaceTypeParameter(typeParameter, newTypeParameter);
      });
    }
  }
}

// 将引用名称解析为对象
export function resolveRefObject(ref): RefObject {
  let name = '';
  const refObj = new RefObject(null);
  let tmp: RefObject = refObj;
  for (const char of ref) {
    if (isLetter(char)) {
      name += char;
    } else {
      const copyName = name;
      if (['<'].includes(char)) {
        if (tmp.name) {
          const newRef = new RefObject(copyName, tmp);
          tmp.typeParameters.push(newRef);
          tmp = newRef;
        } else {
          tmp.name = copyName;
        }
      } else if (char === ',' || char === '>') {
        if (copyName) {
          tmp.typeParameters.push(new RefObject(copyName));
        }
        if (char === '>') {
          tmp = tmp.parent;
        }
      }
      name = '';
    }
  }
  if (name) {
    refObj.name = name;
  }
  return refObj;
}
