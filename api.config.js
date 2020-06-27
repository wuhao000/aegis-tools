module.exports = {
  apiRoot: 'generated/api',
  typeRoot: 'generated/types',
  templates: {
    definition: 'definition.ts.tmpl'
  },
  configs: [{
    url: 'http://localhost:9210/management/apis',
    typeParameterReflects: [{
      name: 'KeyValue',
      typeProperties: ['key', 'value']
    }, {
      name: 'Page',
      typeProperties: ['content']
    }]
  }],
  typesAsAny: ['JSONArray', 'Serializable', 'JSONObject'],
  unwrapTypes: ['Response', 'ResponseSimpleEnum', 'JsonResult']
};
