import { IGetAnyFn, IValidKey, IValidKeysFns } from "./model";

function createOnceSwitcher<IObj>(Vo: IObj, DEFAULT_KEY: string): IGetAnyFn {
  return (key: string): any => Vo?.[key] || Vo[DEFAULT_KEY];
}

function createIsOnceValid<IObj>(
  Vo: IObj,
  DEFAULT_KEY: string
): IValidKeysFns[] {
  const options = Object.keys(Vo);
  const algo = [DEFAULT_KEY].concat(options);
  return algo.map(
    (item): IValidKey =>
      (key: string): boolean =>
        item === key
  );
}

export { createOnceSwitcher, createIsOnceValid };
