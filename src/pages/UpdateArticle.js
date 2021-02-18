import React, { useState, useEffect, useRef } from 'react';

export default function Article(props) {
	const [article, setArticle] = useState({
		title: '',
		body: '',
		summary: ''
	});

	const [didDelete, setDidDelete] = useState(false);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
	const summaryInput = useRef(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/articles/${props.match.params.id}`);
				const data = await response.json();
				setArticle(data);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [article, didDelete]);

	const handleDelete = async e => {
		try {
			const response = await fetch(`/api/articles/${props.match.params.id}/`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch(
				`/api/articles/${props.match.params.id}/edit`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						title: titleInput.current.value,
						body: bodyInput.current.value,
						summary: summaryInput.current.value
					})
				}
			);
			const data = await response.json();
			setArticle(data);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className="UpdateArticlePage">
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				Title:{' '}
				<input type="text" ref={titleInput} defaultValue={article.title} />{' '}
				<br />
				Summary:{' '}
				<input
					type="text"
					ref={summaryInput}
					defaultValue={article.summary}
				/>{' '}
				<br />
				{/* Author: <input type="text" ref={authorInput} /> <br /> */}
				Body:{' '}
				<textarea
					rows="2"
					cols="20"
					wrap="hard"
					id="submission"
					ref={bodyInput}
					defaultValue={article.body}
				></textarea>
				<br />
				<input
					type="submit"
					id="SubmitButton"
					value="Edit Article"
					onClick={handleSubmit}
				/>{' '}
				<br />
			</form>
			<button onClick={handleDelete}>Delete Article</button>
		</div>
	);
}
