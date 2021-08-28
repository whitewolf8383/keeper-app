import React from "react";

// Data
import notes from "../notes";

// Components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function createNote(notes) {
  return(
    <Note 
      key = {notes.id}
      title = {notes.title}
      message = {notes.message}
    />
  );
}

function App(){
  return(
    <div className="app-div">
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
};

export default App;