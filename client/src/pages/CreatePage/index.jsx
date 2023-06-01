import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createFlashcards } from '../../actions';
import { useFlashcards } from '../../hooks/useFlashcards';
import { useAuth } from '../../hooks/useAuth';

const CreatePage = () => {
	const { dispatch } = useFlashcards();
	const { user } = useAuth();

	const [frontSide, setFrontSide] = useState('');
	const [category, setCategory] = useState('');
	const [backSide, setBackSide] = useState('');

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

	const successCreate = (message) =>
		toast(message, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const resetForm = () => {
		setFrontSide('');
		setBackSide('');
		setCategory('');
	};

	const handleInputQuestion = (e) => {
		setFrontSide(e.target.value);
	};
	const handleInputCategory = (e) => {
		setCategory(e.target.value);
	};
	const handleInputAnswer = (e) => {
		setBackSide(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const flashcard = { frontSide, backSide, category, username: user.username };

		const options = {
			method: 'POST',
			body: JSON.stringify(flashcard),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		};

		try {
			const res = await fetch('http://localhost:3000/flashcards', options);
			const data = await res.json();

			if (!res.ok) {
				errorCreate(`${data.error}`);
			}

			if (res.ok) {
				successCreate('Flash card has been created!');
				dispatch(createFlashcards(data));
				resetForm();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form className="register" onSubmit={handleSubmit}>
				<h1>Create Your Flashcard</h1>
				<label htmlFor="frontSide">
					<b>Question</b>
				</label>
				<input type="text" id="frontSide" name="frontSide" onChange={handleInputQuestion} />

				<label htmlFor="category">
					<b>Category</b>
				</label>
				<input type="text" id="category" name="category" value={category} onChange={handleInputCategory} />

				<label htmlFor="backSide">
					<b>Answer</b>
				</label>
				<textarea id="backSide" name="backSide" rows="5" cols="50" onChange={handleInputAnswer} />

				<button type="submit">Create</button>
				<ToastContainer />
			</form>
		</>
	);
};

export default CreatePage;
