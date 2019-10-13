module.exports = {
  apiRoot: 'src/api',
  typeRoot: 'types',
  configs: [{
    url: 'http://localhost:8012/v2/api-docs?group=UCKeFu',
    typeParameterReflects: [{
      name: 'KeyValue',
      typeProperties: ['key', 'value']
    }, {
      name: 'Page',
      typeProperties: ['content']
    }]
  }]
};
