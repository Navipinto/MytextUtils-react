import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleDownClick = () => {

    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClear = () => {
    const newText = "";
    setText(newText);
    props.showAlert("cleared!", "success");
  };

  const handleOnChange = (e) => {
    console.log("handleOnChange function took place");
    setText(e.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text has been copied!", "success");
  };

  const handleExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container mt-1"
        style={{ color: props.theme === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter the text"
            onChange={handleOnChange}
            value={text}
            style={{
              color: props.theme === "dark" ? "white" : "black",
              backgroundColor: props.theme === "dark" ? "#13466e" : "white ",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleDownClick}
          disabled={text.length === 0}
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.theme === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((a1) => {
              return a1.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((a1) => {
              return a1.length !== 0;
            }).length}{" "}
          Mins to Read Text
        </p>
        <h3 className="my-3">
          {text.length > 0 ? "Preview" : "Enter text to preview here"}
        </h3>
        <p>{text}</p>
      </div>
    </>
  );
}
