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
          },
          'first': {
            'type': 'boolean'
          },
          'last': {
            'type': 'boolean'
          },
          'number': {
            'type': 'integer',
            'format': 'int32'
          },
          'numberOfElements': {
            'type': 'integer',
            'format': 'int32'
          },
          'size': {
            'type': 'integer',
            'format': 'int32'
          },
          'sort': {
            '$ref': '#/definitions/Sort'
          },
          'totalElements': {
            'type': 'integer',
            'format': 'int64'
          },
          'totalPages': {
            'type': 'integer',
            'format': 'int32'
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
      "JSONObject": {
        "type": "object",
        "title": "JSONObject",
        "additionalProperties": {
          "type": "object"
        }
      },
    } as any;
    const beans = generateBeanDefinitions(definitions, config.configs[0]);
    beans.forEach(bean => {
      console.log(bean.toString());
    });
    console.log(beans.length);
    expect(beans.map(it => it.name)).toContain('Page');
  });
});
