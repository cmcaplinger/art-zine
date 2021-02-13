import React from 'react';
import { Link } from 'react-router-dom';

const Top = props => {
	return (
		<div id="top">
			<Link to={'/'}>
				<h1>zine</h1>
			</Link>
		</div>
	);
};

export default Top;
