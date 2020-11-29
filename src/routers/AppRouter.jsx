import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MinimarketRouter } from './MinimarketRouter';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' component={MinimarketRouter} />
				</Switch>
			</div>
		</Router>
	);
};
