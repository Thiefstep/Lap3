import React, { useState } from 'react';

const Card = ({front, back}) => {
    const [isVisible, setIsVisible] = useState(true)

    const handleDelete = () => {
        setIsVisible(false)
    }

    return<>
        { isVisible && (
        <div className="flashcard">
            <div className='card'>
                <div className='front'>
                    <p>{front}</p>
                </div>
                <div className='back'>
                    <p>{back}</p>
                </div>
            </div>
            <button onClick={handleDelete}><Delete></Delete></button>
        </div>
    )}
    </>
}

export default Card
