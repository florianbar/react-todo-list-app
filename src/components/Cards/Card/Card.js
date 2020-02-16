import React from 'react';
import './Card.css';

const card = (props) => {
    return <div className="Card">
        <button 
            className="remove" 
            onClick={props.removeCard}>x</button>  
        <h3>{props.cardTitle}</h3>
    </div>;
};

export default card;