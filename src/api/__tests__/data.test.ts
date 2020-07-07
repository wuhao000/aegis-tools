import {getConfig} from '../config';
import {generateApi} from '../generate-api';

describe('生成数据', () => {
  it('生成数据', async () => {
    const config = getConfig();
    if (config && config.configs && config.configs.length) {
      const axios = require('axios');
      const fs = require('fs');
      const requests = [];
      const datas = [];
      for (const c of config.configs) {
        try {
          const request = axios.get(c.url);
          requests.push(request);
          const data = (await request).data;
          fs.writeFileSync('src/api/__tests__/data/api.json', JSON.stringify(data))
        } catch (e) {
          console.error(e);
        }
      }
    }
  });
});
