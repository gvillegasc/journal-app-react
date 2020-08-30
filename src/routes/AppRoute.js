import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { AuthRoute } from './AuthRoute';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from 'react';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRoute = () => {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <h1>Espere...</h1>;
	}

	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path="/auth" component={AuthRoute} />

						<Route exact path="/" component={JournalScreen} />

						<Redirect to="/auth/login" />
					</Switch>
				</div>
			</Router>
		</div>
	);
};
