import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthRoute } from './AuthRoute';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRoute = () => {
	return (
		<div>
			<Router>
				<div>
					<Switch>
						<Route path="/auth" component={AuthRoute} />

						<Route exact path="/" component={JournalScreen} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};
