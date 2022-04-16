import { ICreateValidFn } from "./model";

function createIsKey(KEY: string): ICreateValidFn {
  return (key: string): boolean => key === KEY;
}

export { createIsKey };
