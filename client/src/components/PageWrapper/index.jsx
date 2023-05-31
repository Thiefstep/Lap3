import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const style = ({ isActive }) => (isActive ? { color: '#2B061E' } : { color: '#875053' });


const PageWrapper = () => {
	return (
		<>
			<header>
				<ul className="nav-list">
					<li>
						<NavLink to="/" style={style}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/flashcard" style={style}>
							FlashCard
						</NavLink>
					</li>
					<ul className="nav-right">
						<li>
							<NavLink to="/register" style={style}>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink to="/login" style={style}>
								Login
							</NavLink>
						</li>
					</ul>
				</ul>
			</header>
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default PageWrapper;
