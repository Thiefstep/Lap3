import { createContext, useReducer, useEffect } from 'react';
import { authReducer } from '../reducers';
import { loginAction } from '../actions';

export const AuthContext = createContext();

const initialState = {
	user: null,
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user) {
			dispatch(loginAction(user));
		}
	}, []);

	return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
