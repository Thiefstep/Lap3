import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from './useAuth';
import { loginAction } from '../actions';

export const useSignup = () => {
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

	const signup = async (username, email, password) => {
		setIsLoading(true);
		setError(null);

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, email, password }),
		};

		const res = await fetch('http://localhost:3000/users/signup', options);
		const data = await res.json();

		if (!res.ok) {
			setError(data.error);
			setIsLoading(false);
			errorCreate(`${data.error}`);
		}

		if (res.ok) {
			localStorage.setItem('user', JSON.stringify(data));
			dispatch(loginAction(data));
			setIsLoading(false);
		}
	};

	return { signup, isLoading, error };
};
