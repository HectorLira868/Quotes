import React, { useState } from 'react';
import quotes from '../quotes.json';
import Icon from './Icon';

const colors = ["red", "lightblue", "yellow", "lightgreen", "lightcoral", "brown", "black"]

const Quote = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [ index, setIndex ] = useState(randomIndex);

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setIndex(randomIndex);
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[randomColor]}`;
    
    return (
        <div className="card" style={{color: colors[randomColor]}}>
            <Icon />
            <h3>{quotes[index].quote}</h3>
            <h4 className='author'>{quotes[index].author}</h4>
            <button className='button' style={{background: colors[randomColor]}} onClick={changeQuote}> 
                Change Quote
            </button>
        </div>
    );
};

export default Quote;