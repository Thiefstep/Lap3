import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLogin } from '../../hooks/useLogin';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { login, isLoading, error } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(username, password);
	};

	const handleInputUsername = (e) => {
		setUsername(e.target.value);
	};

	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<div className="home">
			<form className="register" onSubmit={handleSubmit}>
				<h1>Login Page</h1>
				<label htmlFor="username">
					<b>Username</b>
				</label>
				<input type="text" id="username" name="username" onChange={handleInputUsername} />
				<label htmlFor="password">
					<b>Password</b>
				</label>
				<input type="password" id="password" name="password" onChange={handleInputPassword} />

				<input disabled={isLoading} type="submit" value="Login" />
				<p>
					Don't have an account?<NavLink to="/register">Register</NavLink>
				</p>
				{error && <ToastContainer />}
			</form>
		</div>
	);
};

export default LoginPage;
