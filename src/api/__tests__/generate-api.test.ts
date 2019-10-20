import {generateAPI, generateData, normalizeName} from '../generate-api';
import {config, data} from './utils';

describe('标准化名称', () => {
  it('数字', () => {
    const name = '12345';
    expect(normalizeName(name)).toEqual('_12345');
  });
  it('包含.', () => {
    const name = 'a.b';
    expect(normalizeName(name)).toEqual('aB');
  });
  it('包含.,以数字开头', () => {
    const name = '1.b';
    expect(normalizeName(name)).toEqual('_1B');
  });
  it('包含中括号', () => {
    const name = 'a[b]';
    expect(normalizeName(name)).toEqual('ab');
  });
  it('执行', async () => {
    const a = generateAPI();
    if (a) {
      const res = await a;
      console.log(res[0].data);
    }
  });
  it('解析', () => {

    const res = generateData(config, [{
      config: config.configs[0],
      data
    }]);
    console.log(res);
  });
});
