import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases
function isObject(val) {
  if (val === null) { return false; }
  return ((typeof val === 'function') || (typeof val === 'object'));
}

describe('objectUtils', () => {
  test('Testing map Function', () => {
    const object = { key1: 5, key2: 10 };
    // testing output is object
    expect(isObject(map(object, ([key, val]) => [key, val]))).toEqual(true);
    const transformFunction1 = (key, val) => [key.toUpperCase(), val * 10];
    const transformFunction2 = (key, val) => [`${key}TEST`, val * 4];

    // testing if map function works correctly
    const transformedObject1 = { KEY1: 50, KEY2: 100 };
    expect(map(object, transformFunction1)).toEqual(transformedObject1);
    const transformedObject2 = { key1TEST: 20, key2TEST: 40 };
    expect(map(object, transformFunction2)).toEqual(transformedObject2);
  });
  test('Testing filter Function', () => {
    const object = { name: 10, key2: 100, key3: 10 };
    // testing output is object
    expect(isObject(filter(object, ([key, val]) => key === 'name'))).toEqual(true);
    const transformFunction1 = ([key, val]) => val === 10;
    // testing if filter function works correctly
    const transformedObject1 = { name: 10, key3: 10 };
    expect(filter(object, transformFunction1)).toEqual(transformedObject1);
  });
  test('Testing invert Function', () => {
    const object = { key1: 'val1', key2: 'val2' };
    // testing output is object
    const inverted = { val1: 'key1', val2: 'key2' };
    expect(invert(object)).toEqual(inverted);
  });
  test('Testing merge function', () => {
    const merged = { key1: 'val1', key2: 'val2', key3: 'val3' };
    expect(merge({ key1: 'val1' }, { key2: 'val2' }, { key3: 'val3' })).toEqual(merged);
  });
  test('Testing all function', () => {
    expect(all({ key1: 10, key2: 15, key3: 19 }, (key, val) => val < 20)).toEqual(true);
    expect(all({ key1: 10, key2: 15, key3: 25 }, (key, val) => val < 20)).toEqual(false);
  });
  test('Testing some function', () => {
    expect(some({ key1: 10, key2: 15, key3: 19 }, (key, val) => val > 20)).toEqual(false);
    expect(some({ key1: 10, key2: 15, key3: 25 }, (key, val) => val > 20)).toEqual(true);
  });
});
