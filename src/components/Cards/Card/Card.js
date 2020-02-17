import React from 'react';
import styles from './Card.module.css';

const card = (props) => {
    return <div className={styles["Card"]}>
        <button 
            className={styles["remove"]} 
            onClick={props.removeCard}>x</button>  
        <h3>{props.cardTitle}</h3>
    </div>;
};

export default card;