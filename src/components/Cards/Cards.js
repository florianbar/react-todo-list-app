import React from 'react';
import Card from './Card/Card';
import './Cards.css';

const cards = (props) => {
    let cards = null;
    if (props.cards.length === 0) {
        cards = <p>No cards</p>;
    } else {
        cards = props.cards.map((card, index) => {
            return <Card 
                key={card.id} 
                cardTitle={card.title}
                removeCard={() => props.removeCard(index)} />;
        });
    }

    return <div className="Cards">
        {cards}
    </div>;
};

export default cards;