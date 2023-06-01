import React, { useState } from 'react';

const Card = ({flashcard}) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleDelete = () => {
        setIsVisible(false)
    }

    return<>
        { isVisible && (
        <div className="flashcard">
        <div className="card">
            <div className="front">
                <p>{flashcard.frontSide}</p>
            </div>
            <div className="back">
                <p>{flashcard.backSide}</p>
            </div>
        </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )}
    </>
}

export default Card
