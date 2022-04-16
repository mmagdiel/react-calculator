import clsx from "clsx";
import React, { ReactNode } from "react";
import { IBtn } from "./model";
import { createIsOnceValid, btnType, st } from "../../services";
import "./btn.css";

function Btn({ label, handle, type }: IBtn): ReactNode {
  const [isSt, isEm, isSecondary, isSecondaryEm, isPrimary, isPrimaryEm] =
    createIsOnceValid(btnType, st);
  return (
    <button
      onClick={handle}
      className={clsx(
        "btn",
        { "btn-st": isSt(type) },
        { "btn-em": isEm(type) },
        { "btn-primary": isPrimary(type) },
        { "btn-primary-em": isPrimaryEm(type) },
        { "btn-secondary": isSecondary(type) },
        { "btn-secondary-em": isSecondaryEm(type) }
      )}
      dangerouslySetInnerHTML={{ __html: label }}
    />
  );
}

export { Btn };
