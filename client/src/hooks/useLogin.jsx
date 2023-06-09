import { useState } from 'react';
import { toast } from 'react-toastify';
import { loginAction } from '../actions';
import { useAuth } from './useAuth';

export const useLogin = () => {
	const [isLoading, setIsLoading] = useState(null);
	const [error, setError] = useState(null);
	const { dispatch } = useAuth();

	const errorCreate = (error) =>
		toast.error(error, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const login = async (username, password) => {
		setIsLoading(true);
		setError(null);

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		};

		const res = await fetch('https://crammer-api.onrender.com/users/login', options);
		const data = await res.json();

		if (!res.ok) {
			setIsLoading(false);
			errorCreate(`${data.error}`);
			setError(data.error);
		}

		if (res.ok) {
			localStorage.setItem('user', JSON.stringify(data));
			dispatch(loginAction(data));
			setIsLoading(false);
		}
	};

	return { login, isLoading, error };
};
