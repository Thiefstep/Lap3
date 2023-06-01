import React, { useState } from 'react';
import { useFlashcards } from '../../hooks/useFlashcards'
import { deleteFlashcard } from '../../actions';
import { useAuth } from '../../hooks/useAuth'



const Card = ({flashcard}) => {
    const { dispatch } = useFlashcards()
    const { user } = useAuth()
    

    const handleDeleteFlashcard = async () => {
        const id = flashcard._id
        
        try {
        const res = await fetch(`http://localhost:3000/flashcards/${id}`, {
            method: 'DELETE',
            headers: {
            Authorization: `Bearer ${user.token}`,
            },
        });
        console.log(res)
        const updatedFlashcards = await res.json()
        if (res.ok) {
            dispatch(deleteFlashcard(updatedFlashcards));
        }
        } catch (error) {
            console.log(error);
        }
    }

    return<>
        <div className="flashcard">
        <div className="card">
            <div className="front">
                <p>{flashcard.frontSide}</p>
            </div>
            <div className="back">
                <p>{flashcard.backSide}</p>
            </div>
            </div>
                <span onClick={handleDeleteFlashcard}>Delete</span>
            </div>
    </>
}

export default Card
