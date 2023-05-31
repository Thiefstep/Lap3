import { useReducer, createContext } from 'react';
import { flashcardsReducer } from '../reducers';

export const FlashcardContext = createContext();

const initialState = {
	flashcards: null,
};

export const FlashcardContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(flashcardsReducer, initialState);

	return <FlashcardContext.Provider value={{ ...state, dispatch }}>{children}</FlashcardContext.Provider>;
};
