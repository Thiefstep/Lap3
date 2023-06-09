import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContextProvider } from './context/auth';
import { FlashcardContextProvider } from './context/flashcard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<AuthContextProvider>
			<FlashcardContextProvider>
				<App />
			</FlashcardContextProvider>
		</AuthContextProvider>
	</Router>
);
