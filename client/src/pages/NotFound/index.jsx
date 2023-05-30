import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="home">
			<h1>404: Page not found</h1>
			<Link to="/">Return Home</Link>
		</div>
	);
};

export default NotFound;
