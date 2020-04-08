import React from "react";
import "./style.css";

function Container(props) {
   return(
      <div className="container">
         <div className="card" key = {props.id}> 
            <img src = {props.img} alt= {props.name} />
         </div>
      </div>
   );
}

export default Container;