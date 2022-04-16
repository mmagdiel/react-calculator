import { IBtnType } from "../../services";

type IHandle = () => any;

interface IBtn {
  type: IBtnType;
  handle: IHandle;
  label: string;
}

export type { IBtn };
