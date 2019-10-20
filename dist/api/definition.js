"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const pascal_1 = tslib_1.__importDefault(require("../pascal"));
const api_1 = tslib_1.__importDefault(require("./api"));
const generate_api_1 = require("./generate-api");
const interface_1 = tslib_1.__importDefault(require("./interface"));
const ref_1 = require("./ref");
const type_1 = tslib_1.__importStar(require("./type"));
function generateBeanDefinitions(definitions, config) {
    const keys = Object.keys(definitions);
    const beanInterfaces = [];
    // keys: ['Response«List«SysDic»»', 'Response«List«WorkordersExtraField»»', 'User', ...]
    keys.forEach(key => {
        const definition = definitions[key];
        const inter = new interface_1.default();
        inter.setName(pascal_1.default(type_1.pure(key)));
        const propertyDefinitions = definition.properties;
        if (definition.properties) {
            const properties = Object.keys(definition.properties);
            properties.forEach(prop => {
                const propertyDefinition = propertyDefinitions[prop];
                const propertyType = propertyDefinition.type;
                const type = type_1.resolveType(propertyType, propertyDefinition);
                if (!prop.includes('-')) {
                    let propertyType = type_1.pure(type);
                    propertyType = propertyType.includes('<') ? 'any' : propertyType;
                    let enumType = '';
                    if (propertyDefinition.enum) {
                        let type = type_1.findTypeByEnum(propertyDefinition.enum);
                        if (!type) {
                            type = new type_1.default();
                            type.name = inter.name + pascal_1.default(prop);
                            type.type = propertyType;
                            type.values = propertyDefinition.enum;
                            type.description = propertyDefinition.description;
                            type_1.addType(type);
                        }
                        enumType = type.name;
                    }
                    inter.properties.push({
                        name: prop,
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
                                    throw new Error(`在${reflect.name}上找不到属性${reflect.typeProperties[index]}, 存在的属性：${inter.properties.map(it => it.name)}`);
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
        else {
            if (!ref_1.isArrayType(inter.name) && ref_1.isObjectType(inter.name)) {
                beanInterfaces.push(inter);
            }
        }
    });
    return beanInterfaces;
}
exports.generateBeanDefinitions = generateBeanDefinitions;
function generateApiDefinitions(data, beanInterfaces, config) {
    const apis = [];
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
                const responseType = type_1.resolveResponseType(typeDefinition.responses['200']);
                if (responseType) {
                    api.responseType = responseType;
                }
                if (typeDefinition.parameters && typeDefinition.parameters.length) {
                    typeDefinition.parameters.forEach((p) => {
                        let enumType = '';
                        if (p.enum) {
                            let type = type_1.findTypeByEnum(p.enum);
                            if (!type) {
                                type = new type_1.default();
                                type.name = pascal_1.default(api.name) + generate_api_1.normalizeName(pascal_1.default(p.name));
                                type.values = p.enum;
                                type.description = p.description;
                                type_1.addType(type);
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
                                    type: pascal_1.default(type_1.pure(p.schema.genericRef.simpleRef))
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
        let tmp = apiObject;
        api.definitionPath.forEach(dp => {
            if (!tmp[dp]) {
                tmp[dp] = {};
            }
            tmp = tmp[dp];
        });
        Object.assign(tmp, api);
    });
    return {
        apis,
        apiObject
    };
}
exports.generateApiDefinitions = generateApiDefinitions;
function resolveDefinitionPath(path) {
    return path.split('/').filter(p => p.indexOf('{') < 0 && p.length).map(it => {
        return it.split('_').map((it, index) => {
            if (index === 0) {
                return it;
            }
            else {
                return pascal_1.default(it);
            }
        }).join('');
    });
}
/**
 * 将请求路径中{param}格式的参数转换为:param的形式
 * @param {string} path
 * @return {string}
 */
function resolvePath(path) {
    return path.replace(/{((\w|_)+)}/g, ':$1');
}
