/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import style from "./Home.module.css";

const Home = () => {
  let [count, setCount] = useState(0);
  let increMent = () => {
    // check if count < 5 then increment add and if increment value is 5 then button cursor:no-drop;
    if (count < 5) {
      setCount(count + 1);
      document.getElementById("btnIc").style.cursor = "pointer";
      document.getElementById("btnDc").style.cursor = "pointer";
    } else {
      document.getElementById("btnIc").style.cursor = "no-drop";
    }
    // setCount(count + 1);
    // console.log(count);
  };
  let decreMent = () => {
    if (count > -5) {
      setCount(count - 1);
      document.getElementById("btnIc").style.cursor = "pointer";
      document.getElementById("btnDc").style.cursor = "pointer";
    } else {
      document.getElementById("btnDc").style.cursor = "no-drop";
    }
  };
  return (
    <div>
      <div className={style.container}>
        <button id="btnIc" onClick={increMent}>
          +
        </button>
        <p>{count}</p>
        <button id="btnDc" onClick={decreMent}>
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
