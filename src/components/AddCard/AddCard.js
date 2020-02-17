import React from 'react';
import styles from './AddCard.module.css';

const cardAddButton = (props) => {
    let cardTitle = "";

    const setCardTitle = (event) => {
        cardTitle = event.target.value;
    };

    let content = null;
    if (props.isAdding) {
        content = <div className={styles["AddCard"]}>
            <input 
                type="text" 
                placeholder="Card name" 
                onChange={setCardTitle} 
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        props.addCard(cardTitle)
                    }
                }} />
            <button className={styles["addButton"]} onClick={() => props.addCard(cardTitle)}>Add</button>
            <button className={styles["cancelButton"]} onClick={props.hideAddForm}>Cancel</button>
        </div>;
    } else {
        content = <div className={styles["AddCard"]}>
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