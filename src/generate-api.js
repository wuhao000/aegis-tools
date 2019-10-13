#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const api_1 = tslib_1.__importDefault(require("./api/api"));
const file_1 = require("./api/file");
const import_declaration_1 = tslib_1.__importDefault(require("./api/import-declaration"));
const interface_1 = tslib_1.__importDefault(require("./api/interface"));
const type_1 = tslib_1.__importStar(require("./api/type"));
const fs = require('fs');
const axios = require('axios');
const merge = require('lodash.merge');
const path = require('path');
const cmdPath = process.env.INIT_CWD || process.cwd();
const apiConfigPath = cmdPath + path.sep + 'api.config.js';
if (fs.existsSync(apiConfigPath)) {
    const configModulePath = path.relative(__dirname, apiConfigPath);
    const config = require(configModulePath);
    if (config && config.configs && config.configs.length) {
        generateApi(config);
    }
    else {
        console.error('配置不能为空');
    }
}
else {
    console.error('缺少api.config.js');
}
function toPascal(name) {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
}
function pureDefinitions(definitions) {
    const res = {};
    Object.keys(definitions).forEach(key => {
        res[type_1.pure(key)] = definitions[key];
    });
    return res;
}
function normalizeName(name) {
    if (!isNaN(parseInt(name[0]))) {
        name = '_' + name;
    }
    if (name.includes('.')) {
        const parts = name.split('.');
        name = parts.map((part, index) => {
            if (index !== 0) {
                return toPascal(part);
            }
            else {
                return part;
            }
        }).join('');
    }
    name = name.replace('[', '').replace(']', '');
    return name;
}
exports.normalizeName = normalizeName;
/**
 * 生成类型定义
 * @param {ApiConfig[]} config
 * @returns {Promise<void>}
 */
async function generateApi(config) {
    config = merge({
        typeRoot: 'src/types',
        apiRoot: 'src/api'
    }, config);
    // 声明的类型
    const types = [];
    // 声明的接口
    const apiInterfaces = [];
    let beanInterfaces = [];
    let apis = [];
    let apiObject = {};
    for (const c of config.configs) {
        const data = (await axios.get(c.url)).data;
        beanInterfaces = beanInterfaces.concat(generateBeanDefinitions(data, c));
        const apiData = generateApiDefinitions(data, beanInterfaces, c);
        apis = apis.concat(apiData.apis);
        apiObject = merge(apiObject, apiData.apiObject);
    }
    const apiImportList = [];
    apiImportList.push(new import_declaration_1.default(null, beanInterfaces.map(it => it.name), `./${file_1.beanDefFileName}`));
    file_1.writeFile(config, types, beanInterfaces, toString, apiObject, apiImportList, toDefinitionString, apiInterfaces);
    function generateBeanDefinitions(data, config) {
        const definitions = data.definitions;
        const keys = Object.keys(data.definitions);
        const beanInterfaces = [];
        keys.forEach(key => {
            const definition = definitions[key];
            const inter = new interface_1.default();
            inter.setName(toPascal(type_1.pure(key)));
            const propertyDefinitions = definition.properties;
            if (definition.properties) {
                const properties = Object.keys(definition.properties);
                properties.forEach(p => {
                    const propertyDefinition = propertyDefinitions[p];
                    const propertyType = propertyDefinition.type;
                    const type = type_1.resolveType(propertyType, propertyDefinition);
                    if (!p.includes('-')) {
                        let propertyType = type_1.pure(type);
                        propertyType = propertyType.includes('<') ? 'any' : propertyType;
                        let enumType = '';
                        if (propertyDefinition.enum) {
                            const type = new type_1.default();
                            type.name = inter.name + toPascal(p);
                            type.type = propertyType;
                            type.values = propertyDefinition.enum;
                            type.description = propertyDefinition.description;
                            if (!types.some(t => t.name === type.name)) {
                                types.push(type);
                            }
                            enumType = type.name;
                        }
                        inter.properties.push({
                            name: p,
                            type: enumType ? enumType : propertyType,
                            description: propertyDefinition.description ? propertyDefinition.description : ''
                        });
                    }
                });
                if (!inter.name.includes('Response<') && !inter.name.includes('ResponseSimpleEnum<')) {
                    if (inter.name.includes('<')) { // 处理带有泛型的情况
                        const typeParameterString = inter.name.substring(inter.name.indexOf('<') + 1, inter.name.length - 1);
                        inter.name = inter.name.substring(0, inter.name.indexOf('<'));
                        if (config.typeParameterReflects) {
                            const reflect = config.typeParameterReflects.find(it => it.name === inter.name);
                            if (reflect) {
                                const typeChars = ['T', 'S', 'U', 'V', 'P', 'M'];
                                const typeParameters = typeParameterString.split(',');
                                const properties = typeParameters.map((it, index) => {
                                    inter.typeParameters.push(typeChars[index]);
                                    const property = inter.properties.find(it => it.name === reflect.typeProperties[index]);
                                    if (!property) {
                                        throw new Error(`在${reflect.name}上找不到属性${reflect.typeProperties[index]}`);
                                    }
                                    return property;
                                });
                                if (!properties.some(it => it.type.includes('<'))) {
                                    properties.forEach((property, index) => {
                                        if (property.type.endsWith('[]') || property.type.startsWith('Array<')) {
                                            property.type = typeChars[index] + '[]';
                                        }
                                        else {
                                            property.type = typeChars[index];
                                        }
                                    });
                                    if (!beanInterfaces.some(it => it.name === inter.name)) {
                                        beanInterfaces.push(inter);
                                    }
                                }
                                else {
                                    console.error(`数据类型【${inter.name}】参数【${properties.find(it => it.type.includes('<')).name}】含有泛型，无法解析为泛型关联属性`);
                                }
                            }
                            else {
                                console.error(`数据类型【${inter.name}】包含泛型参数，但是缺少泛型映射配置`);
                                // console.log(definition);
                                // console.log(inter);
                            }
                        }
                        else {
                            console.error(`数据类型【${inter.name}】包含泛型参数，但是缺少泛型映射配置`);
                        }
                    }
                    else {
                        if (!beanInterfaces.some(it => it.name === inter.name)) {
                            beanInterfaces.push(inter);
                        }
                    }
                }
            }
        });
        return beanInterfaces;
    }
    function resolveDefinitionPath(path) {
        return path.split('/').filter(p => p.indexOf('{') < 0 && p.length).map(it => {
            return it.split('_').map((it, index) => {
                if (index === 0) {
                    return it;
                }
                else {
                    return toPascal(it);
                }
            }).join('');
        });
    }
    function generateApiDefinitions(data, beanInterfaces, config) {
        const apis = [];
        const definitions = pureDefinitions(data.definitions);
        const paths = Object.keys(data.paths);
        paths.forEach(path => {
            if (config.includes && config.includes.length) {
                if (!config.includes.some(it => it.test(path))) {
                    return;
                }
            }
            if (config.excludes && config.excludes.length) {
                if (config.excludes.some(it => it.test(path))) {
                    return;
                }
            }
            const pathDefinition = data.paths[path];
            const requestTypes = Object.keys(pathDefinition).map(item => item.toUpperCase());
            requestTypes.forEach(method => {
                if (['GET', 'PUT', 'POST', 'DELETE'].includes(method)) {
                    const typeDefinition = pathDefinition[method.toLowerCase()];
                    const api = new api_1.default();
                    api.url = resolvePath(path);
                    api.summary = typeDefinition.summary;
                    api.method = method;
                    api.id = typeDefinition.operationId;
                    // swagger自动生成的api的id格式为 java方法名+Using+请求方式，这里取Using之前的部分，即java方法名
                    api.name = api.id.substring(0, api.id.indexOf('Using'));
                    // 将接口路径按/分割，并作为自定接口对象的多层次key
                    api.definitionPath = resolveDefinitionPath(path);
                    api.definitionPath.push(api.name);
                    // POST和PUT请求要判断请求的参数格式是json格式还是form表单的格式
                    if (['POST', 'PUT'].includes(method)) {
                        const nonPathParameters = typeDefinition.parameters && typeDefinition.parameters.filter(it => it.in !== 'path') || [];
                        api.isFormData = !(nonPathParameters.length === 1 && nonPathParameters[0].in === 'body');
                    }
                    const responseType = type_1.resolveResponseType(typeDefinition.responses['200'], definitions);
                    if (responseType) {
                        api.responseType = responseType;
                    }
                    if (typeDefinition.parameters && typeDefinition.parameters.length) {
                        typeDefinition.parameters.forEach((p) => {
                            let enumType = '';
                            if (p.enum) {
                                const type = new type_1.default();
                                type.name = toPascal(api.name) + normalizeName(toPascal(p.name));
                                type.values = p.enum;
                                type.description = p.description;
                                if (!types.some(t => t.name === type.name)) {
                                    types.push(type);
                                }
                                enumType = type.name;
                            }
                            if (p.in !== 'body') {
                                api.parameters.push({
                                    name: p.name,
                                    required: p.required,
                                    type: enumType ? enumType : type_1.resolveType(p.type)
                                });
                            }
                            else {
                                if (p.schema.genericRef) {
                                    api.bodyParameter = {
                                        name: p.name,
                                        required: true,
                                        type: toPascal(type_1.pure(p.schema.genericRef.simpleRef))
                                    };
                                }
                                else if (p.schema.items) {
                                    api.bodyParameter = {
                                        name: p.name,
                                        required: true,
                                        type: 'Array<' + (p.schema.items.genericRef !== undefined ? type_1.pure(p.schema.items.genericRef.simpleRef) : 'any') + '>'
                                    };
                                }
                            }
                        });
                    }
                    apis.push(api);
                }
            });
        });
        const apiObject = {};
        apis.forEach(api => {
            // console.log(api.definitionPath);
            let tmp = apiObject;
            api.definitionPath.forEach(dp => {
                if (!tmp[dp]) {
                    tmp[dp] = {};
                }
                tmp = tmp[dp];
            });
            Object.assign(tmp, api);
        });
        // console.log(apiObject);
        return {
            apis,
            apiObject
        };
    }
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
                    str += `\n${keys.map(key => {
                        const value = obj[key];
                        if (typeof value === 'object') {
                            if (value.method && value.url) {
                                return `${space}/**
${space} * ${value.summary}
${space} */
${space}${key}: ${toDefinitionString(value, level + 1, key)}`;
                            }
                            else {
                                if (level === 0) {
                                    let name = toPascal(key) + 'API<T>';
                                    if (parentKey) {
                                        name = toPascal(parentKey) + name;
                                    }
                                    name = normalizeName(name);
                                    apiInterfaces.push({
                                        name,
                                        body: toDefinitionString(value, level, key)
                                    });
                                    return `\t${key}: ${name}`;
                                }
                                else {
                                    return `\t${key}: ${toDefinitionString(value, level + 1, key)}`;
                                }
                            }
                        }
                        else if (['number', 'boolean'].includes(typeof value)) {
                            return `${key}: ${value}`;
                        }
                        else {
                            return `${key}: '${value}'`;
                        }
                    }).join(`;\n${' '.repeat(2 * level)}`)};\n`;
                }
                str += ' '.repeat(2 * level) + '}';
            }
        }
        return str;
    }
    function toString(obj, level = 0) {
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
                        return key + ': ' + toString(value, level + 1);
                    }
                    else if (['number', 'boolean'].includes(typeof value)) {
                        return `${key}: ${value}`;
                    }
                    else {
                        return `${key}: '${value}'`;
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
    /**
     * 将请求路径中{param}格式的参数转换为:param的形式
     * @param {string} path
     * @return {string}
     */
    function resolvePath(path) {
        return path.replace(/{((\w|_)+)}/g, ':$1');
    }
}
