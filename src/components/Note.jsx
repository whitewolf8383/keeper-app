import React from "react";

let title = "Note Title";
let message = "Note Message";

function Note() {
  return(
    <div className="note-div">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Note;