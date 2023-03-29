import React, { useState } from "react";
import "./calc.css";

const Calculator = () => {
  const [calculation, setcalculation] = useState("");

  let pat = /[^0-9]/;
  function updateCalc(char) {
    if (char === "e") {
      if (calculation.length > 1)
        setcalculation(calculation.slice(0, calculation.length - 1));
      else setcalculation("");
    } else if (char === "c") setcalculation("");
    else if (
      calculation.length === 1 &&
      pat.test(calculation) &&
      pat.test(char)
    ) {
    } else if (
      calculation.length > 1 &&
      pat.test(char) &&
      pat.test(calculation.charAt(calculation.length - 1))
    )
      setcalculation(calculation.slice(0, calculation.length - 1) + char);
    else if (
      calculation.length === 0 &&
      /[\\*/]/.test(char) //||
      // (calculation.length === 0 && char === "0") ||
      // (calculation.length >= 1 &&
      //   char === "0" &&
      //   pat.test(calculation.charAt(calculation.length - 1)))
    ) {
    } else setcalculation(calculation + char);
  }

  function calculate() {
    if (
      calculation.length === 0 ||
      (calculation.length > 0 &&
        pat.test(calculation.charAt(calculation.length - 1)))
    )
      setcalculation(calculation);
    else setcalculation(eval(calculation));
  }

  return (
    <div className="calc">
      <div className="display">
        <p>{calculation}</p>
      </div>
      <div className="controls">
        <button onClick={() => updateCalc("e")} className="big">
          Delete
        </button>
        <button onClick={() => updateCalc("c")} className="big">
          Clear
        </button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8 </button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("0")} className="big">
          0
        </button>
        <button onClick={calculate}>=</button>
        <button onClick={() => updateCalc("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
