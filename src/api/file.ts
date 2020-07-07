import {render} from '../tmpl';
import {toAPIString} from './api';
import {APIData} from './generate-api';
import {types} from './type';

const fs = require('fs');
export const beanDefFileName = 'api-beans';

export function writeFile(data: APIData) {
  const filePath = `${data.config.typeRoot}/${beanDefFileName}.d.ts`;
  fs.writeFile(filePath,
      `${types.map(type => type.toString()).join('\n\n')}

${data.interfaces.map(i => i.toString()).join('\n\n')}`, () => {
      });
  const str = toAPIString(data.apiObject);
  fs.writeFile(`${data.config.apiRoot}/api-definition.ts`,
      render(data.config.templates && data.config.templates.definition || 'node_modules/aegis-dev-tools/src/tmpl/definition.ts.tmpl', {
        content: str
      }), () => {
      });
  fs.writeFile(`${data.config.typeRoot}/api-definition.d.ts`, `import {GenericAPI, StringIdAPI, NumberIdAPI, API} from 'aegis-api-proxy';
${data.imports.map(it => it.toString()).join('\n')}

interface GeneratedApis<T> ${data.generatedApisBody}

${data.apiInterfaces.map(a => {
    return `export interface ${a.name.toString()} ${a.extendsApi ? (`extends ${a.extendsApi}`) : ''} ${a.body}`;
  }).join('\n\n')}`, () => {
  });
}
