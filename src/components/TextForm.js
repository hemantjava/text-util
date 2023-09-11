import React, { useState } from "react"; //{useState}   hooks

export default function TextForm(props) {
  const handleOnClick = () => {
    console.log("Uppercase is clicked");
    setText(text.toLocaleUpperCase());
    props.showAlert("Uppercase text", "success");
  };

  const handleOnClearClick = () => {
    console.log("Clear is clicked");
    setText("");
    props.showAlert("Clear text", "danger");
  };

  const handleOnLCClick = () => {
    console.log("LoweCase is clicked");
    setText(text.toLocaleLowerCase());
    props.showAlert("Lowecase text", "primary");
  };

  const handleOnChange = (event) => {
    console.log("On chnage");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    props.showAlert("Copy text", "warning");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[" "]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space", "info");
  };
  const [text, setText] = useState(""); // state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="10"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button
            className="btn btn-primary button-space"
            onClick={handleOnClick}
          >
            Convert to UpperCase
          </button>

          <button
            className="btn btn-primary button-space"
            onClick={handleOnLCClick}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary button-space"
            onClick={handleOnClearClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary button-space" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary button-space"
            onClick={handleExtraSpace}
          >
            RemoveExtra Space
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your text summary:</h1>
        <p>
          {newFunction(text)} words and {text.length} characters
        </p>
      </div>
    </>
  );

  function newFunction(text) {
    if (text.length === 0) return 0;
    return text.split(" ").length;
  }
}
