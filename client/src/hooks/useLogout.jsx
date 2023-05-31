import { useAuth } from './useAuth';
import { logoutAction } from '../actions';

export const useLogout = () => {
	const { dispatch } = useAuth();

	const logout = () => {
		localStorage.removeItem('user');
		dispatch(logoutAction());
	};

	return { logout };
};
