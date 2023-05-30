import React from "react";
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return <div className="home">
        <div className="content">
            <h1>FlashCard</h1>
            <h2>Welcome!</h2>
            <p>Use our flashcards to help you learn and retain information longer</p>

            <button><NavLink className='nav-item' to='/flashcard' >Go to FlashCards</NavLink></button>
        </div>
    </div>
}

export default HomePage
