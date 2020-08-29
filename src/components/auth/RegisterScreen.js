import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';

export const RegisterScreen = () => {
	// {
	// 	name: 'Gerardo',
	// 	email: 'email@email.com',
	// 	password: '123456',
	// 	password: '1234'
	// }

	const [formValues, handleInputChange] = useForm({
		name: 'Gerardo Villegas',
		email: 'villegasgerardo.j@gmail.com',
		password: '1234567',
		password2: '1234567',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('Name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('Email is required');
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log('Password is fake');
			return false;
		}
		return true;
	};

	return (
		<>
			<h3 className="auth__title">RegisterScreen</h3>

			<form onSubmit={handleRegister}>
				<div className="auth__alert-error">Hola Mundo</div>

				<input
					className="auth__input"
					type="text"
					placeholder="Name"
					name="name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="text"
					placeholder="Email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Confirm password"
					name="password2"
					value={password2}
					onChange={handleInputChange}
				/>
				<button className="btn btn-primary btn-block mb-5" type="submit">
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
