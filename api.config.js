module.exports = {
  apiRoot: 'src/api',
  typeRoot: 'types',
  templates: {
    definition: 'definition.ts.tmpl'
  },
  configs: [{
    // swagger api数据的地址
    url: 'http://localhost:8012/v2/api-docs?group=UCKeFu',
    // 泛型参数定义（name: 对象名称，typeProperties: 泛型参数依次代表的属性）
    typeParameterReflects: [{
      name: 'KeyValue',
      typeProperties: ['key', 'value']
    }, {
      name: 'Page',
      typeProperties: ['content']
    }, {
      name: 'JsonResult',
      typeProperties: ['data']
    }, {
      name: 'SimplePage',
      typeProperties: ['list']
    }]
  }],
  /**
   * 被解析为any类型的对象名称
   */
  typesAsAny: ['JSONArray', 'Serializable', 'JSONObject']
};
