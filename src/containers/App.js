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
    const newCard = {
      id: cards[cards.length-1].id + 1,
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
    let cardsContent = <Cards cards={this.state.cards} removeCard={this.removeCard} />;
    if (this.state.cards.length === 0) {
      cardsContent = <p>No cards</p>;
    }
    return (
      <div className="App">
        <h1>Todo App</h1>
        {cardsContent}
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
