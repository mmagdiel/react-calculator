import React from "react";
import "./calculator.css";

function Calculator() {
  return (
    <div className="contaniner">
      <header className="display">
        <h2 className="screen">
          3234555555555555555555555555555555555555555555
        </h2>
      </header>
      <main className="buttons">
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn">0</button>
      </main>
    </div>
  );
}

export { Calculator };
