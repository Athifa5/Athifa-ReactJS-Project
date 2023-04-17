import React from "react";
import "./displaypage.css";
import Navbar from "../Nav";

function DisplayCharacterCount(){
  return(
    <div>
      <Navbar></Navbar>
      <div className="container">
      <h2>Javascript Character Counters</h2>
      <p>
        Please enter text below<strong>(max character limit is 150)</strong> to
        count characters
      </p>

      <textarea
        id="textarea"
        class="textarea"
        maxlength="150"
        placeholder="start typing here..."
      ></textarea>

      <div>
        <button id="copytext">Copy Entered Text</button>
        <button id="resetbutton">Reset Written Text</button>
      </div>

      <div className="counter-container">
        <p>Total Characters Typed: <span id="total-counter">0</span></p>
        <p>Remaining Characters: <span id="remaining-counter">150</span></p>
      </div>
    </div>
    </div>
  );
}

export default DisplayCharacterCount;