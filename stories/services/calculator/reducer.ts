import { createOnceSwitcher } from "../factories/once";
import { getDisplayAndValue, getChangeSimbol } from "./format";
import { addAtomToValue, deleteLastEl } from "./format";
import { ZERO, ONE, TWO, THREE, FOUR } from "./events";
import { FIVE, SIX, SEVEN, EIGHT, NINE } from "./events";
import { POINT, DELETE, EQUAL, PLUS } from "./events";
import { MINUS, TIMES, DIVIDE, IDEMPOTENCE } from "./events";
import { PORCENTAGE, CHANGE_SIMBOL, CLEAN } from "./events";
import { initialState } from "./store";
import { IAction, IStore } from "./model";

const handleNumber = (num: number) => (state: IStore) => {
  const curr = state.current;
  const value = addAtomToValue(curr, num);
  const [display, current] = getDisplayAndValue(value);
  return { ...state, display, current };
};

const handleZero = handleNumber(0);
const handleOne = handleNumber(1);
const handleTwo = handleNumber(2);
const handleThree = handleNumber(3);
const handleFour = handleNumber(4);
const handleFive = handleNumber(5);
const handleSix = handleNumber(6);
const handleSeven = handleNumber(7);
const handleEight = handleNumber(8);
const handleNine = handleNumber(9);
const handleClean = (_: IStore): IStore => initialState;
const handleIdempotence = (state: IStore): IStore => state;

const handlePoint = (state: IStore): IStore => {
  const curr = state.current;
  const value = addAtomToValue(curr, ".");
  const [display, current] = getDisplayAndValue(value);
  return { ...state, display, current };
};

const handleChangeSimbol = (state: IStore): IStore => {
  const curr = state.current;
  const value = getChangeSimbol(curr);
  const [display, current] = getDisplayAndValue(value);
  return { ...state, display, current };
};

const handleDelete = (state: IStore): IStore => {
  const curr = state.current;
  const value = deleteLastEl(curr);
  const [display, current] = getDisplayAndValue(value);
  return { ...state, display, current };
};

const handleEqual = (state: IStore): IStore => {
  const curr = state.current;
  const prev = state.previous;
  const oper = state.operation;
  const previous = 0;
  const operation = "";
  const value = eval(`${prev}${oper}${curr}`).toString();
  const [display, current] = getDisplayAndValue(value);
  return { display, current, previous, operation };
};

const handlePlus = (state: IStore): IStore => {
  const value = "0";
  const operation = "+";
  const previous = state.current;
  const [display, current] = getDisplayAndValue(value);
  return { display, current, operation, previous };
};

const handleMinus = (state: IStore): IStore => {
  const value = "0";
  const operation = "-";
  const previous = state.current;
  const [display, current] = getDisplayAndValue(value);
  return { display, current, operation, previous };
};

const handleTimes = (state: IStore): IStore => {
  const value = "0";
  const operation = "*";
  const previous = state.current;
  const [display, current] = getDisplayAndValue(value);
  return { display, current, operation, previous };
};

const handleDivide = (state: IStore): IStore => {
  const value = "0";
  const operation = "/";
  const previous = state.current;
  const [display, current] = getDisplayAndValue(value);
  return { display, current, operation, previous };
};

const handlePorcentage = (state: IStore): IStore => {
  const value = "0";
  const operation = "%";
  const previous = state.current;
  const [display, current] = getDisplayAndValue(value);
  return { display, current, operation, previous };
};

const VO = {
  [ZERO]: handleZero,
  [ONE]: handleOne,
  [TWO]: handleTwo,
  [THREE]: handleThree,
  [FOUR]: handleFour,
  [FIVE]: handleFive,
  [SIX]: handleSix,
  [SEVEN]: handleSeven,
  [EIGHT]: handleEight,
  [NINE]: handleNine,
  [POINT]: handlePoint,
  [DELETE]: handleDelete,
  [EQUAL]: handleEqual,
  [PLUS]: handlePlus,
  [MINUS]: handleMinus,
  [TIMES]: handleTimes,
  [DIVIDE]: handleDivide,
  [PORCENTAGE]: handlePorcentage,
  [CHANGE_SIMBOL]: handleChangeSimbol,
  [CLEAN]: handleClean,
  [IDEMPOTENCE]: handleIdempotence,
};

const resolve = createOnceSwitcher(VO, IDEMPOTENCE);

function reducer(state: IStore, action: IAction): IStore {
  const { type } = action;
  return resolve(type)(state);
}

export { reducer };
