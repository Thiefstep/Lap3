export const flashcardsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FLASHCARDS':
			return {
				...state.flashcards,
				flashcards: action.payload,
			};
		case 'CREATE_FLASHCARD':
			return {
				flashcards: [action.payload, ...state.flashcards],
			};
		case 'DELETE_FLASHCARD':
			return { flashcards: state.flashcards.filter((f) => f._id !== action.payload._id), ...state.flashcards };
		default:
			return state;
	}
};

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		default:
			return state;
	}
};
