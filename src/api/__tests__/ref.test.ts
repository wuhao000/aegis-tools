import {resolveRefObject} from '../ref';

describe('ref', () => {
  it('resolve', () => {
    expect(resolveRefObject('JsonResult<JSONArray>').toString()).toBe('JsonResult<any>');
    expect(resolveRefObject('JsonResult<Page<User>>').toString()).toBe('JsonResult<Page<User>>');
    expect(resolveRefObject('List<Map<String, User>>').toString()).toBe('Array<{[key: string]: User}>');
    expect(resolveRefObject('Response<Map<String, List<User>>>').toString()).toBe('Response<{[key: string]: User[]}>');
  });
});
