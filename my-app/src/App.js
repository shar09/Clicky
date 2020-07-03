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
    //Shuffle cards
    const shuffle = (arr) => {
      var ctr = arr.length, temp, index;
      // While there are elements in the array
      while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
          ctr--;
        // And swap the last element with it
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
      }
      return arr;
    }
    //Loop through characters and check if card with clicked:true is clicked
    for(let character of this.state.initialState.characters) {
      if(character.id === id && character.clicked === true) {
        console.log(character.clicked);
        console.log(this.initialState);
        //Loop through characters to set clicked equal to false
        for(let character of this.state.initialState.characters) {
          character.clicked = false;
        }
        //Returning state so rest of the function is not executed
        return this.setState({
          initialState: this.initialState,
          topScore: this.state.topScore
        });
      }
    }
    //Loop through characters and change clicked to true for matched id
    const characters = this.state.initialState.characters.map(character => {
      if(character.id === id) {
        character['clicked'] = true;
      }
      return character;
    });
    //Update score, topScore and set state
    let score = this.state.initialState.score + 1;
    console.log(score);
    let topScore = this.state.topScore;
    topScore = Math.max(score, topScore); 
    shuffle(characters);
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
        <Container characterData = {characters} handleClick = {this.handleClick} shake={!score && this.state.topScore}/>
        <Footer/>
      </Wrapper>
    );
  }
}

export default App;
