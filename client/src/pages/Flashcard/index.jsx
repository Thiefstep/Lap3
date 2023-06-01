import React, { useState, useEffect } from 'react';
import { Card } from '../../components';
import { useFlashcards } from '../../hooks/useFlashcards';
import { useAuth } from '../../hooks/useAuth';
import { setFlashcards } from '../../actions';

const Flashcard = () => {
	const [curCardId, setCurCardId] = useState(1);
	const { flashcards, dispatch } = useFlashcards();
	const { user } = useAuth();

	useEffect(() => {
		const fetchFlashcards = async () => {
			try {
				const res = await fetch('http://localhost:3000/flashcards', {
					headers: {
					Authorization: `Bearer ${user.token}`,
                    username:user.username
					},
				});
				const data = await res.json();

				if (res.ok) {
					dispatch(setFlashcards(data));
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchFlashcards();
	}, [dispatch, user]);

	const handleNextCard = () => {
        if (curCardIndex < flashcards.length - 1) {
            setCurCardIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurCardIndex(0);
        }
    };

	const handlePreviousCard = () => {
		if (curCardId > 1) {
			setCurCardId((prevCardId) => prevCardId - 1);
		}else {
            setCurCardId(flashcards.length - 1)
        }
	};

    

	return (
		<div className="home">
			{flashcards &&
                flashcards.map((f, index) => {
                    if (index + 1 === curCardId) {
                        return <Card key={f._id} flashcard={f} />;
                    }
                    return null;
                })}
			<div className="flashbtn">
				<button onClick={handlePreviousCard}>Previous</button>
				<button onClick={handleNextCard}>Next</button>
			</div>
		</div>
	);
};

export default Flashcard;
