import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className="home">
			<form className="register" action="login">
				<h1>Login Page</h1>
				<label htmlFor="username">
					<b>Username</b>
				</label>
				<input type="text" id="username" name="username" required />

				<label htmlFor="password">
					<b>Password</b>
				</label>
				<input type="password" id="password" name="password" required />

				<input type="submit" value="Login" />
				<p>
					Don't have an account?<NavLink to="/register">Register</NavLink>
				</p>
			</form>
		</div>
	);
};

export default LoginPage;
