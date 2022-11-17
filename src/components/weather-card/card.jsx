import React from 'react';
import './card.css';

const Card = () => {
    return (
        <article className='card-wrapper'>
            <section className='options-container'></section>
            <section className='weather-container'></section>
            <section className='restParams-container'></section>
        </article>
    );
}

export default Card;
