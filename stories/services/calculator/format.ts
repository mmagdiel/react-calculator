import { IDisplay } from "./model";

const getDisplayAndValue = (value: string): [IDisplay, number] => {
  const current = parseFloat(value);
  const display: IDisplay = {
    base: value.slice(0, 10),
    coefficient: `${value.slice(10).length}`,
  };
  return [display, current];
};

const getChangeSimbol = (value: number): string => {
  if (value == 0) {
    return "0";
  }
  if (Math.sign(value) > 0) {
    return `-${value}`;
  }
  return `${-1 * value}`;
};

const addAtomToValue = (value: number, atom: number | string): string => {
  return value != 0 ? `${value}${atom}` : `${atom}`;
};

const deleteLastEl = (value: number): string => {
  const n = value.toString().length;
  if (n == 1) {
    return "0";
  }
  return value.toString().slice(0, n - 1);
};

const getDisplay = (display: IDisplay): string => {
  const { base, coefficient } = display;
  return coefficient == "0" ? `${base}` : `${base}E${coefficient}`;
};

export { getDisplayAndValue, getChangeSimbol };
export { addAtomToValue, deleteLastEl, getDisplay };
