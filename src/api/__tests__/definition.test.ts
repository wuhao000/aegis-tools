import {SwaggerParameter, SwaggerResponse} from '../../types/swagger';
import Api from '../api';
import {generateBeanDefinitions, resolveParameter} from '../definition';
import {resolveResponseType, resolveType} from '../type';
import {config} from './utils';

describe('类型定义', () => {
  it('生成', () => {
    const definitions = {
      'Page«User»': {
        'type': 'object',
        'properties': {
          'content': {
            'type': 'array',
            'items': {
              '$ref': '#/definitions/User'
            }
          }
        },
        'title': 'Page«User»'
      },
      'Response«Page«User»»': {
        'type': 'object',
        'properties': {
          'code': {
            'type': 'integer',
            'format': 'int32'
          },
          'data': {
            '$ref': '#/definitions/Page«User»'
          },
          'msg': {
            'type': 'string'
          }
        },
        'title': 'Response«Page«User»»'
      },
      'Response«Party»': {
        'type': 'object',
        'properties': {
          'code': {
            'type': 'integer',
            'format': 'int32'
          },
          'data': {
            '$ref': '#/definitions/Party'
          },
          'msg': {
            'type': 'string'
          }
        },
        'title': 'Response«Party»'
      },
      'JsonResult«string»': {
        'type': 'object',
        'properties': {
          'code': {
            'type': 'integer',
            'format': 'int32'
          },
          'data': {
            'type': 'string'
          },
          'message': {
            'type': 'string'
          }
        },
        'title': 'JsonResult«string»'
      },
      'JSONObject': {
        'type': 'object',
        'title': 'JSONObject',
        'additionalProperties': {
          'type': 'object'
        }
      }
    } as any;
    const beans = generateBeanDefinitions(definitions, config.configs[0]);
    beans.forEach(bean => {
      console.log(bean.toString());
    });
    expect(beans.map(it => it.name.name)).toContain('Page');
  });
  it('生成2', () => {
    const definitions = {
      'Page«User»': {
        'type': 'object',
        'properties': {
          'content': {
            'type': 'array',
            'items': {
              '$ref': '#/definitions/User'
            }
          },
          'first': {
            'type': 'boolean'
          }
        },
        'title': 'Page«User»'
      }
    } as any;
    const beans = generateBeanDefinitions(definitions, config.configs[0]);
    expect(beans.map(it => it.name.name)).toContain('Page');
    expect(beans.map(it => it.name.toString())).toContain('Page<T>');
  });
  it('去重', () => {
    const definitions = {
      'Page«User»': {
        'type': 'object',
        'properties': {
          'content': {
            'type': 'array',
            'items': {
              '$ref': '#/definitions/User'
            }
          }
        },
        'title': 'Page«User»'
      },
      'Page«Data»': {
        'type': 'object',
        'properties': {
          'content': {
            'type': 'array',
            'items': {
              '$ref': '#/definitions/Data'
            }
          }
        },
        'title': 'Page«Data»'
      }
    } as any;
    const beans = generateBeanDefinitions(definitions, config.configs[0]);
    expect(beans.length).toBe(1);
  });
  it('响应结果解析', () => {
    const res: SwaggerResponse = {
      description: 'OK',
      schemaAsModel: {
        vendorExtensions: {},
        type: 'array',
        items: {
          vendorExtensions: {},
          genericRef: {
            format: 'INTERNAL',
            type: 'DEFINITION',
            ref: '#/definitions/Do1CustomObjectBaseVO',
            simpleRef: 'Do1CustomObjectBaseVO'
          },
          $ref: '#/definitions/Do1CustomObjectBaseVO'
        }
      },
      schemaAsProperty: {
        type: 'array',
        vendorExtensions: {},
        items: {
          vendorExtensions: {},
          genericRef: {
            format: 'INTERNAL',
            type: 'DEFINITION',
            ref: '#/definitions/Do1CustomObjectBaseVO',
            simpleRef: 'Do1CustomObjectBaseVO'
          },
          $ref: '#/definitions/Do1CustomObjectBaseVO'
        }
      },
      examples: {},
      headers: {},
      vendorExtensions: {},
      schema: {
        type: 'array',
        vendorExtensions: {},
        items: {
          vendorExtensions: {},
          genericRef: -{
            format: 'INTERNAL',
            type: 'DEFINITION',
            ref: '#/definitions/Do1CustomObjectBaseVO',
            simpleRef: 'Do1CustomObjectBaseVO'
          },
          $ref: '#/definitions/Do1CustomObjectBaseVO'
        }
      },
      responseSchema: {
        vendorExtensions: {},
        type: 'array',
        items: {
          vendorExtensions: {},
          genericRef: -{
            format: 'INTERNAL',
            type: 'DEFINITION',
            ref: '#/definitions/Do1CustomObjectBaseVO',
            simpleRef: 'Do1CustomObjectBaseVO'
          },
          $ref: '#/definitions/Do1CustomObjectBaseVO'
        }
      }
    };
    const voidRef: SwaggerResponse = {
      description: 'OK',
      examples: {},
      headers: {},
      vendorExtensions: {}
    };
    const ref = resolveResponseType(voidRef);
    expect(ref).toBe(undefined);
  });
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
    const param2: SwaggerParameter = {
      name: 'details',
      in: 'query',
      required: false,
      type: 'object',
      vendorExtensions: {}
    };
    const p2 = resolveParameter(param2, new Api(), {log: ['error']});
    console.log(p2);
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
  it('substr', () => {
    const name = 'JsonResult<HashMap<string,long>>';
    const typeParameterString = name.substring(name.indexOf('<') + 1, name.length - 1);
    expect(typeParameterString).toBe('HashMap<string,long>');
  });
});
