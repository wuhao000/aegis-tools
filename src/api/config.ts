export function getConfig(): ApiConfig | undefined {
  const fs = require('fs');
  const path = require('path');
  const cmdPath = process.env.INIT_CWD || process.cwd();
  const apiConfigPath = cmdPath + path.sep + 'api.config.js';
  if (fs.existsSync(apiConfigPath)) {
    const configModulePath = path.relative(__dirname, apiConfigPath);
    const config: ApiConfig = require(configModulePath);
    if (config && config.configs && config.configs.length) {
      return config;
    } else {
      console.error('配置不能为空');
    }
  } else {
    console.error('缺少api.config.js');
  }
}

export const config = getConfig();

export interface ApiConfig {
  apiRoot: string;
  // 类型定义
  configs: Config[];
  templates: { [key: string]: string };
  typeRoot: string;
  typesAsAny?: string[]
}


export interface Config {
  excludes: RegExp[];
  includes: RegExp[];
  typeParameterReflects: Array<{
    name: string;
    typeProperties: string[];
  }>;
  url: string;
}
