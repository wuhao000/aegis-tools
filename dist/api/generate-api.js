#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pascal_1 = tslib_1.__importDefault(require("../pascal"));
const api_1 = require("./api");
const config_1 = require("./config");
const definition_1 = require("./definition");
const file_1 = require("./file");
const import_declaration_1 = tslib_1.__importDefault(require("./import-declaration"));
const type_1 = require("./type");
function generateAPI() {
    const config = config_1.getConfig();
    if (config && config.configs && config.configs.length) {
        return generateApi(config);
    }
}
exports.generateAPI = generateAPI;
function pureDefinitions(definitions) {
    const res = {};
    Object.keys(definitions).forEach(key => {
        res[type_1.pure(key)] = definitions[key];
    });
    return res;
}
exports.pureDefinitions = pureDefinitions;
function normalizeName(name) {
    if (name.includes('.')) {
        const parts = name.split('.');
        name = parts.map((part, index) => {
            if (index !== 0) {
                return pascal_1.default(part);
            }
            else {
                return part;
            }
        }).join('');
    }
    name = name.replace('[', '').replace(']', '');
    if (!isNaN(parseInt(name[0]))) {
        name = '_' + name;
    }
    return name;
}
exports.normalizeName = normalizeName;
async function generateApi(config) {
    const axios = require('axios');
    const requests = [];
    const datas = [];
    for (const c of config.configs) {
        try {
            const request = axios.get(c.url);
            requests.push(request);
            const data = (await request).data;
            datas.push({
                config: c,
                data
            });
        }
        catch (e) {
            console.error(e);
        }
    }
    const res = generateData(config, datas);
    file_1.writeFile(res);
    return requests;
}
exports.generateApi = generateApi;
/**
 * 生成类型定义
 * @param {ApiConfig[]} config
 * @param datas
 * @returns {Promise<void>}
 */
function generateData(config, datas) {
    const merge = require('lodash.merge');
    config = merge({
        typeRoot: 'src/types',
        apiRoot: 'src/api'
    }, config);
    // 声明的类型
    // 声明的接口
    let beanInterfaces = [];
    let apis = [];
    let apiObject = {};
    datas.forEach(item => {
        const c = item.config;
        const data = item.data;
        try {
            beanInterfaces = beanInterfaces.concat(definition_1.generateBeanDefinitions(data.definitions, c));
            const apiData = definition_1.generateApiDefinitions(data, beanInterfaces, c);
            apis = apis.concat(apiData.apis);
            apiObject = merge(apiObject, apiData.apiObject);
        }
        catch (e) {
            console.error(e);
        }
    });
    const apiImportList = [];
    apiImportList.push(new import_declaration_1.default(null, beanInterfaces.map(it => it.name), `./${file_1.beanDefFileName}`));
    return {
        config,
        interfaces: beanInterfaces,
        apiObject,
        imports: apiImportList,
        generatedApisBody: api_1.toDefinitionString(apiObject),
        apiInterfaces: resolveAPIInterfaces(apiObject, 0, null, [])
            .map(it => ({ name: it.name, body: api_1.toDefinitionString(it.value, it.level, it.key) }))
    };
    function resolveAPIInterfaces(obj, level = 0, parentKey = null, interfaces = []) {
        if (typeof obj === 'object') {
            if (obj.method && obj.url) {
            }
            else {
                const keys = Object.keys(obj);
                if (keys.length) {
                    keys.forEach(key => {
                        const value = obj[key];
                        if (typeof value === 'object') {
                            if (value.method && value.url) {
                                resolveAPIInterfaces(value, level + 1, key, interfaces);
                            }
                            else {
                                if (level === 0) {
                                    let name = pascal_1.default(key) + 'API<T>';
                                    if (parentKey) {
                                        name = pascal_1.default(parentKey) + name;
                                    }
                                    resolveAPIInterfaces(value, level, key, interfaces);
                                    name = normalizeName(name);
                                    interfaces.push({
                                        name,
                                        value,
                                        level,
                                        key
                                    });
                                }
                            }
                        }
                    });
                }
            }
        }
        return interfaces;
    }
}
exports.generateData = generateData;
