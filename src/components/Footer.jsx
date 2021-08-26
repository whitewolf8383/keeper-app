import React from "react";

let year = new Date().getFullYear();

function Footer() {
  return(
    <div className="footer-div">
      <small>Copyright&copy; {year}</small>
    </div>
  );
};

export default Footer;