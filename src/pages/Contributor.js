import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contributor() {
	return (
		<div className="ContributorPage">
			<Link to="/contributors" id="AuthorName">
				<p>Contributor LastName &nbsp;</p>
			</Link>{' '}
			<Link to="/contributors" id="AuthorName">
				<p>Contributor LastName &nbsp;</p>
			</Link>{' '}
			<Link to="/contributors" id="AuthorName">
				<p>Contributor LastName &nbsp;</p>
			</Link>{' '}
		</div>
	);
}
