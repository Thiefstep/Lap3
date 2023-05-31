import { FlashcardContext } from '../context/flashcard';
import { useContext } from 'react';

export const useFlashcards = () => {
	const context = useContext(FlashcardContext);

	if (!context) {
		throw new Error("The hook can't be used outside the Provider");
	}

	return context;
};
