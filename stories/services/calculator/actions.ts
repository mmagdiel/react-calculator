import { ZERO, ONE, TWO, THREE, FOUR } from "./events";
import { FIVE, SIX, SEVEN, EIGHT, NINE } from "./events";
import { POINT, DELETE, EQUAL, PLUS } from "./events";
import { MINUS, TIMES, DIVIDE } from "./events";
import { PORCENTAGE, CHANGE_SIMBOL, CLEAN } from "./events";
import { IAction, IBtn } from "./model";
import { st, em, scd, scdEm, pry, pryEm } from "./model";

const touchZero: IAction = { type: ZERO };
const touchOne: IAction = { type: ONE };
const touchTwo: IAction = { type: TWO };
const touchThree: IAction = { type: THREE };
const touchFour: IAction = { type: FOUR };
const touchFive: IAction = { type: FIVE };
const touchSix: IAction = { type: SIX };
const touchSeven: IAction = { type: SEVEN };
const touchEight: IAction = { type: EIGHT };
const touchNine: IAction = { type: NINE };
const touchPoint: IAction = { type: POINT };
const touchDelete: IAction = { type: DELETE };
const touchEqual: IAction = { type: EQUAL };
const touchPlus: IAction = { type: PLUS };
const touchMinus: IAction = { type: MINUS };
const touchTimes: IAction = { type: TIMES };
const touchDivide: IAction = { type: DIVIDE };
const touchPorcentage: IAction = { type: PORCENTAGE };
const touchChangeSimbol: IAction = { type: CHANGE_SIMBOL };
const touchClean: IAction = { type: CLEAN };

const btns: IBtn[] = [
  { id: "d12d40ea", label: CLEAN, action: touchClean, type: scdEm },
  {
    id: "d42d40ea",
    label: CHANGE_SIMBOL,
    action: touchChangeSimbol,
    type: scd,
  },
  { id: "d22d40ea", label: PORCENTAGE, action: touchPorcentage, type: scd },
  { id: "d32d40ea", label: DIVIDE, action: touchDivide, type: pry },
  { id: "d42d40fa", label: NINE, action: touchNine, type: st },
  { id: "d52d40ea", label: EIGHT, action: touchEight, type: st },
  { id: "d62d40ea", label: SEVEN, action: touchSeven, type: st },
  { id: "d72d40ea", label: TIMES, action: touchTimes, type: pry },
  { id: "d82d40ea", label: SIX, action: touchSix, type: st },
  { id: "d92d40ea", label: FIVE, action: touchFive, type: st },
  { id: "d43d40ea", label: FOUR, action: touchFour, type: st },
  { id: "d44d40ea", label: MINUS, action: touchMinus, type: pry },
  { id: "d45d40ea", label: THREE, action: touchThree, type: st },
  { id: "d46d40ea", label: TWO, action: touchTwo, type: st },
  { id: "d47d40ea", label: ONE, action: touchOne, type: st },
  { id: "d48d40ea", label: PLUS, action: touchPlus, type: pry },
  { id: "d49d40ea", label: ZERO, action: touchZero, type: st },
  { id: "d42e40ea", label: POINT, action: touchPoint, type: st },
  { id: "d42f40ea", label: DELETE, action: touchDelete, type: em },
  { id: "d42g40ea", label: EQUAL, action: touchEqual, type: pryEm },
];

export { btns };
