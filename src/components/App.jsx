import React from "react";

// Components
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
  return(
    <div className="app-div">
      <Header />
      <Note />
      <Footer />
    </div>
  );
};

export default App;