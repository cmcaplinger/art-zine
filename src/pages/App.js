import React, { useState } from 'react';

export default function App(props) {
	return (
		<div className="AppPage">
			<div className="HomePage">
				<div className="ArticlePreview">
					<ul>{props.article}</ul>
				</div>
				<div className="Top Article"></div>
			</div>
		</div>
	);
}
