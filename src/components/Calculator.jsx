import React from "react";
import "./calc.css";

const Calculator = () => {
  return (
    <div className="calc">
      <div className="display">
        <p></p>
      </div>
      <div className="controls">
        <button>7</button>
        <button>8 </button>
        <button>9</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>0</button>
        <button>erase</button>
        <button>=</button>
        <button>/</button>
      </div>
    </div>
  );
};

export default Calculator;
