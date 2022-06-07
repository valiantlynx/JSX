import React from "react";
import ReactDOM from "react-dom";

const fName = "Valiant";
const lName = "Lynx";
const luckyNo = Math.round(Math.random() * 10);

const img = "https://picsum.photos/200";

//the styling has to be done as js object and the key will no longer be kebab but camel case
//inline styling if for when ur code should shange on the go like depending on time

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {`${fName} ${lName}`}
    </h1>
    <p style={customStyle}>Your lucky number is {luckyNo}</p>
    <img src={img + "?grayscale"} alt="sorry" />
  </div>,
  document.getElementById("root")
);
