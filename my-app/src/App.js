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
        <Container characterData = {characters}/>
      </Wrapper>
    );
  }
}

export default App;
