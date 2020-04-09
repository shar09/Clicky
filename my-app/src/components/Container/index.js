import React from "react";
import "./style.css";

function Container(props) {
   return(
      <div className="container">
        { props.characterData.map(character => (         
         <div className="card" key = {character.id} onClick = {() => props.handleClick(character.id)}> 
            <img src = {character.img} alt= {character.name} />
         </div>
         ))}
      </div>
   );
}

export default Container;