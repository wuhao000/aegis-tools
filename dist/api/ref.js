"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
/**
 * 解析swagger中的类型对应的ts类型
 */
function resolveRef(ref) {
    const obj = resolveRefObject(ref);
    if (obj.unwrap) {
        return obj.typeParameters[0];
    }
    else {
        return obj;
    }
}
exports.resolveRef = resolveRef;
function isLetter(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
const refConfig = {
    arrayTypes: ['List', 'Iterable', 'ArrayList', 'LinkedList'],
    objectTypes: ['Map', 'HashMap', 'TreeMap'],
    numberTypes: ['int', 'long', 'double', 'float']
};
function isObjectType(name) {
    return refConfig.objectTypes.includes(name);
}
exports.isObjectType = isObjectType;
function isArrayType(name) {
    return refConfig.arrayTypes.includes(name);
}
exports.isArrayType = isArrayType;
class RefObject {
    constructor(p1, p2) {
        this.isEnum = false;
        if (p2) {
            this.name = p1;
            this.parent = p2;
        }
        else if (p1) {
            if (typeof p1 === 'string') {
                this.name = p1;
            }
            else {
                this.parent = p1;
            }
        }
        this.typeParameters = [];
    }
    get unwrap() {
        if (config_1.config.unwrapTypes) {
            return config_1.config.unwrapTypes.includes(this.name);
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
        return config_1.config.typesAsAny && config_1.config.typesAsAny.includes(this.name) || this.name === 'object';
    }
    toString() {
        if (this.isArrayType) {
            if (this.typeParameters.length >= 1) {
                if (this.typeParameters.length > 1) {
                    console.error(`数组类型【${this.name}】只允许有一个泛型参数`);
                }
                if (this.typeParameters[0].typeParameters.length === 0) {
                    return `${this.typeParameters[0].toString()}[]`;
                }
                return `Array<${this.typeParameters[0].toString()}>`;
            }
            else {
                return 'any[]';
            }
        }
        else if (this.isObjectType) {
            if (this.typeParameters.length >= 2) {
                if (this.typeParameters.length > 2) {
                    console.error(`对象类型【${this.name}】只允许有2个泛型参数`);
                }
                return `{[key: ${this.typeParameters[0].toString()}]: ${this.typeParameters[1].toString()}}`;
            }
            else {
                return `{[key: string]: any}`;
            }
        }
        else if (this.typeParameters.length) {
            return `${this.name}<${this.typeParameters.map(it => it.toString()).join(', ')}>`;
        }
        else if (this.isAnyType) {
            return 'any';
        }
        else if (refConfig.numberTypes.includes(this.name)) {
            return 'number';
        }
        else if (this.name === 'Unit') {
            return 'never';
        }
        else if (['String', 'Boolean'].includes(this.name)) {
            return this.name.toLowerCase();
        }
        else {
            return this.name;
        }
    }
}
exports.RefObject = RefObject;
// 将引用名称解析为对象
function resolveRefObject(ref) {
    let name = '';
    const refObj = new RefObject(null);
    let tmp = refObj;
    for (const char of ref) {
        if (isLetter(char)) {
            name += char;
        }
        else {
            const copyName = name;
            if (['<'].includes(char)) {
                if (tmp.name) {
                    const newRef = new RefObject(copyName, tmp);
                    tmp.typeParameters.push(newRef);
                    tmp = newRef;
                }
                else {
                    tmp.name = copyName;
                }
            }
            else if (char === ',' || char === '>') {
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
exports.resolveRefObject = resolveRefObject;
