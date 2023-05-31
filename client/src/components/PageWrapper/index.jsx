import React, {useEffect, useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png'
import '../../assets/app.css';

const style = ({ isActive }) => (isActive ? { color: '#2B061E' } : { color: '#875053' });


const PageWrapper = () => {
	const [theme,setTheme]=useState('body')
	const toggleTheme = () => {
		if (theme === 'body'){
			setTheme('dark')
		} else {
			setTheme('body')
		}
	}
	useEffect(()=>{
		document.body.className = theme;
	},[theme])
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
			<footer>
				<div className={`App{$theme}`}>
					<button onClick={toggleTheme}>Toggle Theme</button>
				</div>
			</footer>
		</>
	);
};

export default PageWrapper;
