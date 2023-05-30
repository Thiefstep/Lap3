import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSignup } from '../../hooks/useSignup';

const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, isLoading, error } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(username, email, password);
	};

	const handleInputUsername = (e) => {
		setUsername(e.target.value);
	};
	const handleInputEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	return (
		<>
			<form className="register" onSubmit={handleSubmit}>
				<h1>Register Page</h1>
				<label htmlFor="username">
					<b>Username</b>
				</label>
				<input type="text" id="username" name="username" onChange={handleInputUsername} />

				<label htmlFor="email">
					<b>Email</b>
				</label>
				<input type="email" id="email" name="email" onChange={handleInputEmail} />

				<label htmlFor="password">
					<b>Password</b>
				</label>
				<input type="password" id="password" name="password" onChange={handleInputPassword} />

				<button disabled={isLoading}>Register</button>
				<p>
					Have an account already?<NavLink to="/login">Login</NavLink>
				</p>
				{error && <ToastContainer />}
			</form>
		</>
	);
};

export default RegisterPage;
