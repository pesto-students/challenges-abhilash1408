import { count, cycle, repeat } from './iterInfinite';

describe('Iter Infinite Tests', () => {
  test('Testing count generator', () => {
    const myCount = count(5, 2);
    expect(myCount.next().value).toEqual(5);
    expect(myCount.next().done).toEqual(false);
    expect(myCount.next().value).toEqual(9);
    const newCount = count(10);
    expect(newCount.next().value).toEqual(10);
    expect(newCount.next().value).toEqual(11);
  });
  test('Testing cycle generator', () => {
    const myCycle = cycle('ABCD', 10);
    expect(myCycle.next().value).toEqual('A');
    expect(myCycle.next().value).toEqual('B');
    expect(myCycle.next().value).toEqual('C');
    expect(myCycle.next().value).toEqual('D');
    expect(myCycle.next().value).toEqual('A');
  });
  test('Testing repeat generator', () => {
    const myRepeat = repeat('ABCD', 2);
    expect(myRepeat.next().value).toEqual('ABCD');
    expect(myRepeat.next().value).toEqual('ABCD');
    expect(myRepeat.next().done).toEqual(true);
  });
});
