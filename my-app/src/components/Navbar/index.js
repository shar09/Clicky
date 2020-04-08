import React from "react";
import "./style.css";

function Navbar(props) {
   return (
      <div className="nav">
         <h3><a href="">Clicky Game</a></h3>
         <h3>{props.result}</h3>
         <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
      </div>
   );
}

export default Navbar;