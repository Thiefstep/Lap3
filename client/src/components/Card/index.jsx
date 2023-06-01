import React from 'react';
import { useFlashcards } from '../../hooks/useFlashcards';

const Card = ({ flashcard }) => {
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
			</div>
		</>
	);
};

export default Card;
