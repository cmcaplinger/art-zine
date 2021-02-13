import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppRouter = props => {
	return (
		(
			<React.StrictMode>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
		),
		document.getElementById('root')
	);
};

export default AppRouter;
