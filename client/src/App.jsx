import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as Pages from './pages';
import { PageWrapper } from './components';
import { useAuth } from './hooks/useAuth';

import './assets/app.css';

const App = () => {
	const { user } = useAuth();
	return <>
		<Routes>
			<Route path="/" element={<PageWrapper />}>
				<Route index element={user ? <Pages.HomePage /> : <Navigate to="/login" />} />
				<Route path="/flashcard" element={user ? <Pages.Flashcard /> : <Navigate to="/login" />} />
				<Route path="/login" element={!user ? <Pages.LoginPage /> : <Navigate to="/" />} />
				<Route path="/register" element={!user ? <Pages.RegisterPage /> : <Navigate to="/" />} />
				<Route path="/*" element={<Pages.NotFound />} />
			</Route>
		</Routes>
		</>
	;
};

export default App;
