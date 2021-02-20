import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Article(props) {
	const [article, setArticle] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/articles/${props.match.params.id}`);
				const data = await response.json();
				setArticle(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="ArticlePage">
			<div className="ShowArticle">
				<h4>{article.summary ? article.summary : ''}</h4>
				<h2>{article.title ? article.title : ''}</h2> <br />
				<p>{article.body ? article.body : ''}</p> <br />
				{/* <button>Boost</button> &nbsp;&nbsp;&nbsp;
				<button>Bury</button> &nbsp;&nbsp;&nbsp; */}
				<Link to={`/articles/${article._id}/edit`}>
					<button>Edit this Article</button>
				</Link>
			</div>
		</div>
	);
}
