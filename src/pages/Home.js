import React, { useState } from 'react';

export default function Home() {
	return (
		<div className="HomePage">
			<div className="Articles">
				<div className="ArticlePreview">
					<ul>
						<li>
							<h3>Title</h3>
							<h4>Author</h4>
							<p>Article Summary goes here...</p>
						</li>
						<li>
							<h3>Title</h3>
							<h4>Author</h4>
							<p>Article Summary goes here...</p>
						</li>
						<li>
							<h3>Title</h3>
							<h4>Author</h4>
							<p>Article Summary goes here...</p>
						</li>
					</ul>
				</div>
				<div className="TopArticle">
					<ul>
						<li>
							<h4>Title</h4>
							<h5>Author</h5>
							<p>13 Votes</p>
						</li>
						<li>
							<h4>Title</h4>
							<h5>Author</h5>
							<p>13 Votes</p>
						</li>
						<li>
							<h4>Title</h4>
							<h5>Author</h5>
							<p>13 Votes</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
