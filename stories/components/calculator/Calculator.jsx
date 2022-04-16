import React, { useReducer } from "react";
import "./calculator.css";
import { Btn } from "../btn/Btn";
import { initialState, reducer, btns, getDisplay } from "../../services";

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="contaniner">
      <header className="display">
        <h2 className="screen">{getDisplay(state.display)}</h2>
      </header>
      <main className="buttons">
        {btns.map((item) => {
          const { id, label, action, type } = item;
          const handle = () => dispatch(action);
          return <Btn key={id} handle={handle} type={type} label={label} />;
        })}
      </main>
    </div>
  );
}

export { Calculator };
