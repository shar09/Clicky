import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import characters from "./characters.json";

class App extends Component {  
  state = {
    characters,
    score: 0,
    topScore: 0,
    result: "Click an image to begin!"
  };
  
  render() {
    const { characters, score, topScore, result } = this.state;
    return (
      <Wrapper>
        <Navbar result = {result} score = {score} topScore = {topScore}/>
        <Header />
        { characters.map(character => (
          <Container 
            key = {character.id}
            name = {character.name}
            id = {character.id}
            img = {character.img}
            clicked = {character.clicked}         
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
