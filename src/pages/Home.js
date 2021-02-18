import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		//Immediately Invoked Function Expression  - IFFE!
		(async () => {
			try {
				const response = await fetch('/api/articles');
				const data = await response.json();
				setArticles(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage">
			<div className="Articles">
				<div className="ArticlePreview">
					{articles.map(article => {
						return (
							<ul>
								<li>
									<div key={article._id}>
										<Link to={`/articles/${article._id}`}>
											<h3>{article.title}</h3>
										</Link>
										<p>{article.summary}</p>
									</div>
								</li>
							</ul>
						);
					})}
				</div>
				<div className="TopArticle">
					<h4>Topic</h4>
					<h4>Topic</h4>
					<h4>Topic</h4>
					<h4>Topic</h4>
					<h4>Topic</h4>
					<h4>Topic</h4>
					<h4>Topic</h4>
				</div>
			</div>
		</div>
	);
}
