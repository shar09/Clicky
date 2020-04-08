import React from "react";
import "./style.css";

function Header() {
   return(
      <div className="header">
         <h1 className="title">Clicky Game!</h1>
         <h3 className="caption">Click an image to earn points but dont click on any more than once!</h3>
      </div>
   );
}

export default Header;
