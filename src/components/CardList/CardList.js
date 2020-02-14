import React from 'react';
import Card from './Card/Card';
import CardAdd from './CardAdd/CardAdd'

const cardList = (props) => {
    const cards = props.cards.map((card, index) => {
        return <Card key={card.id} cardTitle={card.title} cardDescription={card.description} />;
    });

    return <div className="CardList">
        {cards}
        <CardAdd />
    </div>;
};

export default cardList;