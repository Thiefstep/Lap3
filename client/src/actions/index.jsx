export const setFlashcards = (flashcards) => ({
	type: 'SET_FLASHCARDS',
	payload: flashcards,
});

export const createFlashcards = (flashcard) => ({
	type: 'CREATE_FLASHCARDS',
	payload: flashcard,
});

export const deleteFlashcard = (flashcard) => ({
	type: 'DELETE_FLASHCARDS',
	payload: flashcard,
});

export const loginAction = (user) => ({
	type: 'LOGIN',
	payload: user,
});

export const logoutAction = () => ({
	type: 'LOGOUT',
});
