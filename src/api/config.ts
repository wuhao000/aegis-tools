export type LogType = 'warn' | 'info' | 'error' | 'log';

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
  configs: ModuleConfig[];
  log: Array<LogType>;
  templates: { [key: string]: string };
  typeRoot: string;
  /**
   * 映射为any的类型
   */
  typesAsAny?: string[]
  typesAsVoid?: string[]
  unwrapTypes?: string[];
}

export interface ModuleConfig {
  templates?: { [key: string]: string };
  apiRoot?: string;
  typeRoot?: string;
  name?: string;
  log?: Array<LogType>;
  excludes?: RegExp[];
  includes?: RegExp[];
  typeParameterReflects?: Array<{
    name: string;
    typeProperties: string[];
  }>;
  url?: string;
}
