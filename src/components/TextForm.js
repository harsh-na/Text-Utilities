import React, { useState } from "react";
import copy from "copy-to-clipboard"; 

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };


  const handleCopyClick = () => {
   copy(text);
  };


  const handleExtraSpacesClick = () => {
     let newText=text.split(/[ ]+/);
     setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="container"></div>
        <div className="mb-3">
           {/*it is important to listen to on change otherwise we could not
           type in text area and becoz we r using value =state variable and it is
  important to change state variable*/}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpacesClick}>
          Removes Extra Spaces
        </button>
      </div>
      <div className="container my-3" >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  );
}
