"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const basePath = 'src/packages';
/**
 * 获取组件文件夹相对路径的绝对路径
 * @param {Component} component 组件对象
 * @param {string} relativePath 与组件文件夹的相对路径
 */
const resolvePath = (component, relativePath) => {
    let copyRelativePath = relativePath;
    if (copyRelativePath.startsWith('/')) {
        copyRelativePath = copyRelativePath.substring(1);
    }
    return `${basePath}/${component.dir}/${copyRelativePath}`;
};
module.exports.resolvePath = resolvePath;
/**
 * 获取组件相关路径文件的内容
 * @param {Component} component 组件对象
 * @param {string} relativePath 与组件文件夹的相对路径
 */
const readPath = (component, relativePath) => {
    const path = resolvePath(component, relativePath);
    if (fs_1.default.existsSync(path)) {
        return fs_1.default.readFileSync(path).toString();
    }
};
module.exports.readPath = readPath;
