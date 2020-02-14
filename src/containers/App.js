import React, { Component } from 'react';
import Cards from '../components/Cards/Cards'
import CardAddButton from '../components/Cards/CardAddButton/CardAddButton'
import './App.css';

class App extends Component {
  state = {
    cards: [
      { id: 0, title: "Card 1" },
      { id: 1, title: "Card 2" },
      { id: 2, title: "Card 3" }
    ],
    isAdding: false
  };

  showAddForm = () => {
    this.setState({
        isAdding: true
    });
  };

  hideAddForm = () => {
    this.setState({
        isAdding: false
    });
  };

  addCard = (cardTitle) => {
    let cards = [...this.state.cards];
    const newCard = {
      id: cards.length,
      title: cardTitle
    };
    cards.push(newCard);
    this.setState({ cards: cards });
    this.hideAddForm();
  };

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Cards cards={this.state.cards} />
        <CardAddButton
          isAdding={this.state.isAdding}
          showAddForm={this.showAddForm} 
          hideAddForm={this.hideAddForm} 
          addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
