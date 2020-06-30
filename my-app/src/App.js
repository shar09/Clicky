import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import characters from "./characters.json";

class App extends Component {  
  constructor(props) {
  super(props)

  this.initialState = {
    characters,
    score: 0,
    topScore: 0,
    result: "Click an image to begin!"
  };
  this.state = this.initialState;
  this.handleClick = this.handleClick.bind(this);
  console.log(this);
}

  handleClick(id) {
    for(let character of this.state.characters) {
      if(character.id === id && character.clicked === true) {
        console.log(character.clicked);
        return this.setState(this.initialState);
      }
    }

    const characters = this.state.characters.map(character => {
      if(character.id === id) {
        character['clicked'] = true;
      }
      return character;
    });

    let score = this.state.score + 1;
    let topScore = this.state.topScore;
    topScore = Math.max(score, topScore); 
    this.setState({
      characters,
      score,
      topScore,
      result: "You clicked!"
    })
    console.log(characters);
  }
  
  render() {
    const { characters, score, topScore, result } = this.state;
    return (
      <Wrapper>
        <Navbar result = {result} score = {score} topScore = {topScore}/>
        <Header />
        <Container characterData = {characters} handleClick = {this.handleClick}/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
