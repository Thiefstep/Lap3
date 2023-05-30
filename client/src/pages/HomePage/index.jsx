import React from "react";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return<main>
        <h1>FlashCard</h1>
        <p>Welcome!</p>
        <p>Use our flashcards to help you learn and retain information longer</p>

        <button><NavLink to='/flashcard' style={{textDecoration:'none'}}>Go to FlashCards</NavLink></button>
    </main>
}

export default HomePage
