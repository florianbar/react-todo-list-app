import React, { Component } from 'react';

class CardAdd extends Component {
    state = {
        isAdding: false
    };

    showAddForm = () => {
        this.setState({
            isAdding: true
        });
    }

    hideAddForm = () => {
        this.setState({
            isAdding: false
        });
    }

    addCard = () => {
        this.hideAddForm();
    }

    render() {
        let content = null;

        if (this.state.isAdding) {
            content = <div>
                <input type="text" placeholder="Card name" />
                <button onClick={this.addCard}>Add</button>
                <button onClick={this.hideAddForm}>Cancel</button>
            </div>;
        } else {
            content = <button type="button" onClick={this.showAddForm}>Add Card</button>;
        }

        return <div className="CardAdd">
            {content}
        </div>;
    }
};

export default CardAdd;