import React, { Component } from 'react';
import CardList from '../components/CardList/CardList'
import './App.css';

class App extends Component {
  state = {
    cards: [
      { id: 0, title: "Card 1" },
      { id: 1, title: "Card 2" },
      { id: 2, title: "Card 3" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>  
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
