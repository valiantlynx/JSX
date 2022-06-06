import React from "react";
import ReactDOM from "react-dom";

const fName = "Valiant";
const lName = "Lynx";
const luckyNo = Math.round(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is {luckyNo}</p>
  </div>,
  document.getElementById("root")
);
