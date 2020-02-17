import React, { Component } from 'react';
import Cards from '../components/Cards/Cards'
import AddCard from '../components/AddCard/AddCard'
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

  addCard = (title) => {
    let cards = [...this.state.cards];
    const cardId = cards.length > 0 ? cards[cards.length-1].id + 1 : 0;
    const newCard = {
      id: cardId,
      title: title
    };
    cards.push(newCard);
    this.setState({ cards: cards });
    this.hideAddForm();
  };

  removeCard = (index) => {
    let cards = [...this.state.cards];
    cards.splice(index, 1);
    this.setState({ cards: cards });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Cards cards={this.state.cards} removeCard={this.removeCard} />
        <AddCard
          isAdding={this.state.isAdding}
          showAddForm={this.showAddForm} 
          hideAddForm={this.hideAddForm} 
          addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
