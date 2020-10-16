import { allSettled } from './allSettled';

describe('allsettled', () => {
  test('check for invalid inputs', async () => {
    expect(await allSettled()).toEqual('invalid input');
    expect(await allSettled(1)).toEqual('invalid input');
  });
  test('check the output correctness', async () => {
    expect(typeof allSettled(['test']).then).toBe('function');
    expect(await allSettled(['test', 15])).toEqual([
      { status: 'fulfilled', value: 'test' },
      { status: 'fulfilled', value: 15 },
    ]);
    const promise1 = new Promise((resolve, reject) => setTimeout(reject, 0, 'invalid'));
    const promise2 = Promise.resolve('test');
    expect(await allSettled([promise1, promise2])).toEqual([
      { status: 'rejected', rejected: 'invalid' },
      { status: 'fulfilled', value: 'test' },
    ]);
  });
});
