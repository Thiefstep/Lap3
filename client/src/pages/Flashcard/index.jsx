import React, { useState } from "react";
import { Card } from "../../components";

const Flashcard = () => {
    const [curCardId, setCurCardId] = useState(1);

    const handleNextCard = () => {
        setCurCardId((prevCardId) => prevCardId + 1);
    };

    const handlePreviousCard = () => {
        if (curCardId > 1) {
            setCurCardId((prevCardId) => prevCardId - 1);
        }
    };

    return (
        <div className="home">
            <Card />
            <div className="flashbtn">
                <button onClick={handlePreviousCard}>Previous</button>
                <button onClick={handleNextCard}>Next</button>
            </div>
        </div>
    );
};

export default Flashcard;
