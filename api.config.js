module.exports = {
  apiRoot: 'generated/api',
  typeRoot: 'generated/types',
  log: [
    // 'debug',
    // 'warn',
    // 'info'
  ],
  templates: {
    definition: 'definition.ts.tmpl'
  },
  configs: [{
    url: 'http://localhost:9210/management/apis',
    excludes: [/\/api\/v1\/msg.*/],
    typeParameterReflects: [{
      name: 'KeyValue',
      typeProperties: ['key', 'value']
    }, {
      name: 'JsonResult',
      typeProperties: ['data']
    }, {
      name: 'Page',
      typeProperties: ['content']
    }, {
      name: 'SimplePage',
      typeProperties: ['list']
    }, {
      name: 'Pair',
      typeProperties: ['first', 'second']
    }, {
      name: 'RequestValues',
      typeProperties: ['data']
    }]
  }],
  typesAsAny: ['JSONArray', 'Serializable', 'JSONObject', 'Unit'],
  typesAsVoid: ['Unit'],
  unwrapTypes: ['Response', 'ResponseSimpleEnum', 'JsonResult']
};
