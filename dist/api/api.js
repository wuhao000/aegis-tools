"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pascal_1 = tslib_1.__importDefault(require("../pascal"));
const generate_api_1 = require("./generate-api");
class Api {
    constructor() {
        this.bodyParameter = null;
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
exports.default = Api;
function toAPIString(obj) {
    const lines = toAPIString2(obj, 0).split('\n');
    return lines.map((it, index) => index > 0 && index < lines.length - 1 ? `  ${it}` : it).join('\n');
}
exports.toAPIString = toAPIString;
function toAPIString2(obj, level = 0) {
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
        }
        else {
            str += `${space}${keys.map(key => {
                const value = obj[key];
                if (typeof value === 'object') {
                    return `${generate_api_1.normalizeName(key)}: ${toAPIString2(value, level + 1)}`;
                }
                else if (['number', 'boolean'].includes(typeof value)) {
                    return `${generate_api_1.normalizeName(key)}: ${value}`;
                }
                else {
                    return `${generate_api_1.normalizeName(key)}: '${value}'`;
                }
            }).join(',\n' + space)}`;
            if (level > 0) {
                str += `\n${' '.repeat(2 * (level - 1))}}`;
            }
            else {
                str += `\n${space}}`;
            }
        }
    }
    return str;
}
exports.toAPIString2 = toAPIString2;
function toDefinitionString(obj, level = 0, parentKey = null) {
    let str = '';
    if (typeof obj === 'object') {
        if (obj.method && obj.url) {
            if (obj.parameters.length === 1 && obj.parameters[0].type === 'string') {
                str += 'StringIdAPI<T';
            }
            else if (obj.parameters.length === 1 && obj.parameters[0].type === 'number') {
                str += 'NumberIdAPI<T';
            }
            else {
                str += 'GenericAPI<T';
            }
            if (obj.responseType) {
                str += `, ${obj.responseType}`;
            }
            if (obj.bodyParameter && obj.parameters.length) {
                // console.error('混合参数无法解析');
            }
            else if (obj.bodyParameter) {
                str += ', ' + obj.bodyParameter.type;
            }
            str += '>';
        }
        else {
            const space = ' '.repeat(2 * level + 2);
            str += '{';
            const keys = Object.keys(obj);
            if (keys.length) {
                str += `\n${keys.map((key) => {
                    const value = obj[key];
                    if (typeof value === 'object') {
                        if (value.method && value.url) {
                            return `${space}/**
${space} * ${value.summary}
${space} */
${space}${generate_api_1.normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
                        }
                        else {
                            if (level === 0) {
                                let name = pascal_1.default(key) + 'API<T>';
                                if (parentKey) {
                                    name = pascal_1.default(parentKey) + name;
                                }
                                name = generate_api_1.normalizeName(name);
                                return `\t${generate_api_1.normalizeName(key)}: ${name}`;
                            }
                            else {
                                return `\t${generate_api_1.normalizeName(key)}: ${toDefinitionString(value, level + 1, key)}`;
                            }
                        }
                    }
                    else {
                        return `${generate_api_1.normalizeName(key)}: '${value}'`;
                    }
                }).join(`;\n${' '.repeat(2 * level)}`)};\n`;
            }
            str += ' '.repeat(2 * level) + '}';
        }
    }
    return str;
}
exports.toDefinitionString = toDefinitionString;
