type IGetAnyFn = (key: string) => any;
type IValidKey = (key: string) => boolean;
type IValidKeysFns = (key: string) => IValidKey;

export type { IGetAnyFn, IValidKey, IValidKeysFns };
