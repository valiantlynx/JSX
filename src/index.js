import React from "react";
import ReactDOM from "react-dom";

const fName = "Valiant";
const lName = "Lynx";
const luckyNo = Math.round(Math.random() * 10);

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {`${fName} ${lName}`}
    </h1>
    <p>Your lucky number is {luckyNo}</p>
    <img src={img + "?grayscale"} alt="sorry" />
  </div>,
  document.getElementById("root")
);
