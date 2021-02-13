import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
	return (
		<div className="Footer">
			<div id="NavFooter">
				<Link to="/submissions">submission</Link>
				<Link to="/about">about</Link>
				<Link to="/contact">contact</Link>
			</div>
		</div>
	);
};

export default Footer;
