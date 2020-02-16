import React from 'react';
import Card from './Card/Card';
import './Cards.css';

const cards = (props) => {
    const cards = props.cards.map((card, index) => {
        return <Card 
            key={card.id} 
            cardTitle={card.title} 
            cardDescription={card.description} />;
    });

    return <div className="Cards">
        {cards}
    </div>;
};

export default cards;