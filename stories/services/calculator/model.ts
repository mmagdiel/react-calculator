interface IDisplay {
  base: string;
  coefficient: string;
}

interface IStore {
  display: IDisplay;
  operation: string;
  current: number;
  previous: number;
}

enum IBtnType {
  st,
  em,
  scd,
  scdEm,
  pry,
  pryEm,
}

interface IAction {
  type: string;
}

interface IBtn {
  id: string;
  label: string;
  action: IAction;
  type: IBtnType;
}

const st = "st";
const em = "em";
const scd = "scd";
const scdEm = "scdEm";
const pry = "pry";
const pryEm = "pryEm";

const btnType = {
  em,
  scd,
  scdEm,
  pry,
  pryEm,
};

export { st, em, scd, scdEm, pry, pryEm, btnType };
export type { IAction, IBtn };
export type { IDisplay, IStore, IBtnType };
