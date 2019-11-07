"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const components = require('./components');
const fs_1 = tslib_1.__importDefault(require("fs"));
const checkSuffix = ['.ts', '.tsx', '.vue', '.jsx', '.js'];
const checkDirs = ['mixins'];
function getCheckFiles(dir) {
    if (fs_1.default.existsSync(dir)) {
        const fileNames = fs_1.default.readdirSync(dir);
        return fileNames.filter(name => checkSuffix.some(it => name.endsWith(it)))
            .map(it => dir + '/' + it);
    }
    return [];
}
components.forEach(comp => {
    const componentRoot = 'src/packages/' + comp.dir;
    const srcPath = componentRoot + '/src';
    const files = fs_1.default.readdirSync(componentRoot);
    let checkFiles = files.filter(name => checkSuffix.some(it => name.endsWith(it)))
        .map(it => componentRoot + '/' + it);
    checkFiles = checkFiles.concat(getCheckFiles(srcPath));
    checkDirs.forEach((dir) => {
        checkFiles = checkFiles.concat(getCheckFiles('src/' + dir));
    });
    checkFiles.forEach(path => {
        const content = fs_1.default.readFileSync(path).toString();
        if (content.includes('\'@/')) {
            throw Error('文件' + path + '中存在路径别名@');
        }
    });
});
