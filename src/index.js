import React from "react";
import ReactDOM from "react-dom";

const fName = "Valiant";
const lName = "Lynx";
const luckyNo = Math.round(Math.random() * 10);

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {`${fName} ${lName}`}
    </h1>
    <p>Your lucky number is {luckyNo}</p>
    <div>
      <img
        className="dreams-img"
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/astronomical-clock-bruce-rolff.jpg"
        alt="time"
      ></img>
      <img
        className="dreams-img"
        src="https://imageio.forbes.com/specials-images/imageserve/62557e415e159fd6eab56ecb/Render-of-exterior-cabin-of-Spaceship-Neptune-by-Space-Perspective/960x0.jpg?format=jpg&width=960"
        alt="space"
      ></img>
      <img
        className="dreams-img"
        src="https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-scaled.jpg"
        alt="technology"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
