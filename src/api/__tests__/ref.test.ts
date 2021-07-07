import {resolveRefObject} from '../ref';

describe('ref', () => {
  it('resolve', () => {
    expect(resolveRefObject('JsonResult<Unit>').toString()).toBe('JsonResult<void>');
    expect(resolveRefObject('JsonResult<JSONArray>').toString()).toBe('JsonResult<any>');
    expect(resolveRefObject('JsonResult<Page<User>>').toString()).toBe('JsonResult<Page<User>>');
    expect(resolveRefObject('List<Map<String, User>>').toString()).toBe('Array<{[key: string]: User}>');
    expect(resolveRefObject('Response<Map<String, List<User>>>').toString()).toBe('Response<{[key: string]: User[]}>');
    expect(resolveRefObject('Pair<WorkOrders,List<DataEvent>>').toString()).toBe('Pair<WorkOrders, DataEvent[]>');
  });
});
