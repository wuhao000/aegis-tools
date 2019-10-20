"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getConfig() {
    const fs = require('fs');
    const path = require('path');
    const cmdPath = process.env.INIT_CWD || process.cwd();
    const apiConfigPath = cmdPath + path.sep + 'api.config.js';
    if (fs.existsSync(apiConfigPath)) {
        const configModulePath = path.relative(__dirname, apiConfigPath);
        const config = require(configModulePath);
        if (config && config.configs && config.configs.length) {
            return config;
        }
        else {
            console.error('配置不能为空');
        }
    }
    else {
        console.error('缺少api.config.js');
    }
}
exports.getConfig = getConfig;
exports.config = getConfig();
