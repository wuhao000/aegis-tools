"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_api_1 = require("./generate-api");
const ref_1 = require("./ref");
class Interface {
    constructor() {
        this.name = null;
        this.properties = [];
    }
    get unwrap() {
        return this.name.unwrap;
    }
    setName(name) {
        this.name = ref_1.resolveRefObject(generate_api_1.normalizeName(name));
    }
    get ignore() {
        return this.name.isObjectType || this.name.isArrayType || this.name.isAnyType;
    }
    toString() {
        return `export interface ${this.name.toString()} {
  ${this.properties.map(p => {
            return `${p.description ? `/**
\t * ${p.description.trim()}
\t */
\t` : ''}${this.name.name === 'Account' && p.name === 'id' ? '// @ts-ignore\n\t' : ''}${p.name}?: ${p.type};`;
        }).join('\n\t')}
}\n`;
    }
}
exports.default = Interface;
