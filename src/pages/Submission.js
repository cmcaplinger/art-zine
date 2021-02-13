import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [articles, setArticles] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
	const authorInput = useRef(null);

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

	const handleSubmit = async e => {
		e.preventDefault();
		const titleValue = titleInput.current.value;
		const bodyValue = bodyInput.current.value;
		const authorValue = authorInput.current.value;
		try {
			const response = await fetch('/api/articles', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					author: authorValue,
					body: bodyValue
				})
			});
			const data = await response.json();
			setArticles([...articles, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="SubmissionPage">
			{articles.map(article => {
				return (
					<div key={article._id}>
						<Link to={`/${article._id}`}>
							<h2>{article.title}</h2>
						</Link>
						<p>{article.body}</p>
					</div>
				);
			})}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					Title: <input type="text" ref={titleInput} />
				</label>
				<label>
					Author: <input type="text" ref={authorInput} />
				</label>
				<label>
					Body: <input type="text" id="submission" ref={bodyInput} />
				</label>
				<input type="submit" value="Submit Article" />
			</form>
		</div>
	);
}
