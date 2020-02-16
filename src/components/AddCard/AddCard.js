import React from 'react';
import './AddCard.css';

const cardAddButton = (props) => {
    let cardTitle = "";

    const setCardTitle = (event) => {
        cardTitle = event.target.value;
    };

    let content = null;
    if (props.isAdding) {
        content = <div className="AddCard">
            <input 
                type="text" 
                placeholder="Card name" 
                onChange={setCardTitle} 
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        props.addCard(cardTitle)
                    }
                }} />
            <button className="addButton" onClick={() => props.addCard(cardTitle)}>Add</button>
            <button className="cancelButton" onClick={props.hideAddForm}>Cancel</button>
        </div>;
    } else {
        content = <div className="AddCard">
            <button 
                type="button" 
                onClick={props.showAddForm}>
                Add Card
            </button>
        </div>;
    }

    return <div className="CardAdd">
        {content}
    </div>;
};

export default cardAddButton;