import React, { useEffect } from 'react';
import { useFlashcards } from '../../hooks/useFlashcards';
import { deleteFlashcard, setFlashcards } from '../../actions';
import { useAuth } from '../../hooks/useAuth';

const Card = ({ flashcard }) => {
	const { flashcards, dispatch } = useFlashcards();
	const { user } = useAuth();

	const handleDeleteFlashcard = async () => {
		const id = flashcard._id;

		try {
			const res = await fetch(`https://crammer-api.onrender.com/flashcards/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			const updatedFlashcards = await res.json();
			if (res.ok) {
				dispatch(deleteFlashcard(updatedFlashcards));
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchFlashcards = async () => {
			try {
				const res = await fetch('https://crammer-api.onrender.com/flashcards', {
					headers: {
						Authorization: `Bearer ${user.token}`,
						username: user.username,
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
	}, [flashcards, user, dispatch]);

	return (
		<>
			<div className="flashcard">
				<div className="card">
					<div className="front">
						<p>{flashcard.frontSide}</p>
					</div>
					<div className="back">
						<p>{flashcard.backSide}</p>
					</div>
				</div>
				<button aria-label="Delete" onClick={handleDeleteFlashcard}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Card;
