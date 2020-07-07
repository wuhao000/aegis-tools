import {generateBeanDefinitions} from '../definition';
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
  it('substr', () => {
    const name = 'JsonResult<HashMap<string,long>>';
    const typeParameterString = name.substring(name.indexOf('<') + 1, name.length - 1);
    expect(typeParameterString).toBe('HashMap<string,long>');
  });
});
