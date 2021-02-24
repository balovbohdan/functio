import inspect from '.';

describe('utils/inspect', () => {
 it('inspects value with inspect method', () => {
   const value = 'inspect value';
   const container = { inspect: () => value };
   const inspectedValue = inspect(container);
   
   expect(inspectedValue).toBe(value);
 });

 it('inspects named function', () => {
   const fn = () => {};
   const inspectedValue = inspect(fn);
   const expectedInspectedValue = 'function fn() { }';

   expect(inspectedValue).toBe(expectedInspectedValue);
 });

 it('inspects anonymous function', () => {
   const inspectedValue = inspect(() => {});
   const expectedInspectedValue = 'function () { }';

   expect(inspectedValue).toBe(expectedInspectedValue);
 });

 it('inspects array', () => {
   const value = [1, 2, 3];
   const inspectedValue = inspect(value);
   const expectedInspectedValue = '[ 1, 2, 3 ]';

   expect(inspectedValue).toBe(expectedInspectedValue);
 });

 it('inspects string', () => {
   const value = 'value';
   const inspectedValue = inspect(value);
   const expectedInspectedValue = `'${value}'`;

   expect(inspectedValue).toBe(expectedInspectedValue);
 });

  it('inspects object', () => {
    const value = { 1: 1, 2: 2, 3: 3 };
    const inspectedValue = inspect(value);
    const expectedInspectedValue = '{ 1: 1, 2: 2, 3: 3 }';

    expect(inspectedValue).toBe(expectedInspectedValue);
  });
});
