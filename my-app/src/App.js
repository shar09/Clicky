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
    result: "Click an image to begin!"
  };
  this.state = {
    initialState: this.initialState,   
    topScore: 0
  };
  this.handleClick = this.handleClick.bind(this);
  console.log(this);
}

  handleClick(id) {
    for(let character of this.state.initialState.characters) {
      if(character.id === id && character.clicked === true) {
        console.log(character.clicked);
        console.log(this.initialState);
        for(let character of this.state.initialState.characters) {
          character.clicked = false;
        }
        return this.setState({
          initialState: this.initialState,
          topScore: this.state.topScore
        });
      }
    }

    const characters = this.state.initialState.characters.map(character => {
      if(character.id === id) {
        character['clicked'] = true;
      }
      return character;
    });
    let score = this.state.initialState.score + 1;
    console.log(score);
    let topScore = this.state.topScore;
    topScore = Math.max(score, topScore); 
    this.setState({
      initialState: {
        characters,
        score,
        result: "You clicked!"
      },
      topScore
    })
    console.log(characters);
  }
  
  render() {
    const { characters, score, result } = this.state.initialState;
    return (
      <Wrapper>
        <Navbar result = {result} score = {score} topScore = {this.state.topScore}/>
        <Header />
        <Container characterData = {characters} handleClick = {this.handleClick}/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
