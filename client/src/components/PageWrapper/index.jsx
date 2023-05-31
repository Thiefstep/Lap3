import React, {useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../assets/app.css';
import logo from '../../assets/logo.png'

const style = ({ isActive }) => (isActive ? { color: '#2B061E' } : { color: '#875053' });


const PageWrapper = () => {
	return (
		<>
			<header>
				<ul className="nav-list">
					<li>
						<NavLink className = 'nav-item' to="/" style={style}>
							<img src ={logo} alt ="logo" />
						</NavLink>
					</li>
					<li>
						<NavLink className = 'nav-item' to="/flashcard" style={style}>
							FlashCard
						</NavLink>
					</li>
					<ul className="nav-right">
						<li>
							<NavLink className = 'nav-item' to="/register" style={style}>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink className = 'nav-item' to="/login" style={style}>
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
