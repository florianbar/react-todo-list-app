import React from 'react';

const cardAddButton = (props) => {
    let cardTitle = "";

    const setCardTitle = (event) => {
        cardTitle = event.target.value;
    };

    let content = null;
    if (props.isAdding) {
        content = <div>
            <input type="text" placeholder="Card name" onChange={setCardTitle} />
            <button onClick={() => props.addCard(cardTitle)}>Add</button>
            <button onClick={props.hideAddForm}>Cancel</button>
        </div>;
    } else {
        content = <button type="button" onClick={props.showAddForm}>Add Card</button>;
    }

    return <div className="CardAdd">
        {content}
    </div>;
};

export default cardAddButton;