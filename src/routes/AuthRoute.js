import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRoute = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/auth/login" component={LoginScreen} />
				<Route exact path="/auth/register" component={RegisterScreen} />

				<Redirect to="/auth/login" />
			</Switch>
		</div>
	);
};
