"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentType;
(function (ComponentType) {
    ComponentType["Tool"] = "tool";
    ComponentType["UIComponent"] = "component";
    ComponentType["Directive"] = "directive";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
const resolveComponents = () => {
    const packageMap = require('../../../src/packages/map.json');
    const componentList = [];
    Object.keys(packageMap).forEach(name => {
        const componentName = name.split('-').map(it => it.substring(0, 1).toUpperCase() + it.substring(1)).join('');
        componentList.push({
            name: packageMap[name].name,
            dir: name,
            componentType: packageMap[name].componentType,
            zhName: packageMap[name].chineseName,
            upperCase: componentName,
            type: packageMap[name].type
        });
    });
    return componentList;
};
module.exports = resolveComponents();
