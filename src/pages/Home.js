import React, { useEffect, useState, useRef } from 'react';
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
										<Link to={`/${article._id}`}>
											<h3>{article.title}</h3>
										</Link>
										<Link to={`/${author._id}`}>
											<h4>{author.name}</h4>
										</Link>
										<p>{article.body}</p>
									</div>
								</li>
							</ul>
						);
					})}
				</div>
				<div className="TopArticle"></div>
			</div>
		</div>
	);
}

{
	/* <li>
							<h3>Title</h3>
							<h4>Author</h4>
							<p>Article Summary goes here...</p>
						</li> */
}
{
	/* <li>
							<h4>Title</h4>
							<h5>Author</h5>
							<p>13 Votes</p>
						</li> */
}
