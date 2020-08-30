import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { setError, removeError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();

	const { msgError, loading } = useSelector((state) => state.ui);

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
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('Password is fake'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">RegisterScreen</h3>

			<form onSubmit={handleRegister}>
				{msgError && <div className="auth__alert-error">{msgError}</div>}

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
				<button
					className="btn btn-primary btn-block mb-5"
					type="submit"
					disabled={loading}
				>
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
