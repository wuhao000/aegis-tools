import {SwaggerParameter, SwaggerResponse} from '../../types/swagger';
import Api from '../api';
import {generateBeanDefinitions, resolveParameter} from '../definition';
import {resolveResponseType, resolveType} from '../type';
import {config} from './utils';

describe('类型定义', () => {
  it('参数解析', () => {
    const param: SwaggerParameter = {
      name: 'ids',
      in: 'query',
      description: '填单人用户账号',
      required: false,
      type: 'array',
      items: {
        type: 'string',
        vendorExtensions: {}
      },
      collectionFormat: 'multi',
      vendorExtensions: {}
    };
    const p = resolveParameter(param, new Api(), {log: ['error']});
    expect(p.type).toBe('Array<string>');
  });
  it('参数解析2', () => {
    const param2: SwaggerParameter = {
      name: 'details',
      in: 'query',
      required: false,
      type: 'object',
      vendorExtensions: {}
    };
    const p2 = resolveParameter(param2, new Api(), {log: ['error']});
  });
  it('参数解析2', () => {
    console.log(resolveType('array', {
      type: 'array',
      vendorExtensions: {},
      items: {
        vendorExtensions: {},
        genericRef: {
          format: 'INTERNAL',
          type: 'DEFINITION',
          ref: '#/definitions/Error-ModelName{namespace=\'java.time\', name=\'LocalDate\'}',
          simpleRef: 'Error-ModelName{namespace=\'java.time\', name=\'LocalDate\'}'
        },
        $ref: '#/definitions/Error-ModelName{namespace=\'java.time\', name=\'LocalDate\'}'
      }
    }));
  });
  it('参数解析3',() =>{
    const param: SwaggerParameter = {
      "vendorExtensions": {},
      "in": "body",
      "name": "jobIds",
      "description": "jobIds",
      "required": true,
      "schema": {
        "vendorExtensions": {},
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int64",
          "vendorExtensions": {}
        }
      }
    }
    const p = resolveParameter(param, new Api(), {log: ['error']});
    expect(p.type).toBe('Array<number>');
  })
});
