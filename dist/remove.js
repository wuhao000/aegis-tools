"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const env = process.env;
const args = JSON.parse(env.npm_config_argv).remain;
const fs_1 = tslib_1.__importDefault(require("fs"));
if (args.length !== 1) {
    throw new Error('参数数量不正确');
}
else {
    const name = args[0];
    const path = 'src/packages/map.json';
    const componentMap = require('../../../src/packages/map.json');
    if (!componentMap[name]) {
        throw new Error('组件不存在');
    }
    else {
        delete componentMap[name];
        fs_1.default.writeFileSync(path, JSON.stringify(componentMap));
    }
}
function deleteFolder(path) {
    var files = [];
    if (fs_1.default.existsSync(path)) {
        files = fs_1.default.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + '/' + file;
            if (fs_1.default.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            }
            else { // delete file
                fs_1.default.unlinkSync(curPath);
            }
        });
        fs_1.default.rmdirSync(path);
    }
}
