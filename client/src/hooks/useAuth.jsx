import { AuthContext } from '../context/auth';
import { useContext } from 'react';

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('The hook must be used inside the Provider');
	}

	return context;
};
