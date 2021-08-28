import React from "react";

// Data
import notes from "../notes";

// Components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
  return(
    <div className="app-div">
      <Header />
      {notes.map((notes) => {
        return <Note 
          key = {notes.id}
          title = {notes.title}
          message = {notes.message}
        />
      })}
      <Footer />
    </div>
  );
};

export default App;