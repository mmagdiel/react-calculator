import { IStore } from "./model";

const initialState: IStore = {
  display: {
    base: "0",
    coefficient: "0",
  },
  operation: "",
  current: 0,
  previous: 0,
};

export { initialState };
