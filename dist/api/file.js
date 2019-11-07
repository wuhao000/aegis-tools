"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tmpl_1 = require("../tmpl");
const api_1 = require("./api");
const type_1 = require("./type");
const fs = require('fs');
exports.beanDefFileName = 'api-beans';
function writeFile(data) {
    const filePath = `${data.config.typeRoot}/${exports.beanDefFileName}.d.ts`;
    fs.writeFile(filePath, `${type_1.types.map(type => type.toString()).join('\n\n')}

${data.interfaces.map(i => i.toString()).join('\n\n')}`, () => {
    });
    const str = api_1.toAPIString(data.apiObject);
    fs.writeFile(`${data.config.apiRoot}/api-definition.ts`, tmpl_1.render(data.config.templates && data.config.templates.definition || 'node_modules/aegis-dev-tools/src/tmpl/definition.ts.tmpl', {
        content: str
    }), () => {
    });
    fs.writeFile(`${data.config.typeRoot}/api-definition.d.ts`, `import {GenericAPI, StringIdAPI, NumberIdAPI} from 'aegis-api-proxy';
${data.imports.map(it => it.toString()).join('\n')}

interface GeneratedApis<T> ${data.generatedApisBody}

${data.apiInterfaces.map(a => {
        return `export interface ${a.name.toString()} ${a.body}`;
    }).join('\n\n')}
`, () => {
    });
}
exports.writeFile = writeFile;
