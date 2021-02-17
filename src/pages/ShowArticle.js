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
		<div>
			<h4>{article.author ? article.author : ''}</h4>
			<h1>{article.title ? article.title : ''}</h1>
			<p>{article.body ? article.body : ''}</p>
			<Link to={`/${article._id}/edit`}>
				<button>Agree</button>
				<button>Disagree</button>
			</Link>
			<Link to={`/${article._id}/edit`}>
				<button>Update this Article</button>
			</Link>
		</div>
	);
}
