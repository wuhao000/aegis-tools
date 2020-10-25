const axios = require('axios');

axios.get('http://localhost:8080/v2/api-docs')
    .then((d) => {
      console.log(JSON.stringify(d.data))
    });
