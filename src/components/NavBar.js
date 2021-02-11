import React from 'react';
import { Link } from 'react-router-dom';
import App from '../pages/App';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{props.routes
				.filter(item => !item.path.includes('Admin'))
				.map(({ key, path }) => (
					<Link key={key} to={path}>
						{key}
					</Link>
				))}
		</nav>
	);
};

export default NavBar;
