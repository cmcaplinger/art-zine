import React, { useState, useRef } from 'react';

export default function Submission(props) {
	const [articles, setArticles] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
	const authorInput = useRef(null);

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
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				Title: <input type="text" ref={titleInput} /> <br />
				Author: <input type="text" ref={authorInput} /> <br />
				Body:{' '}
				<textarea
					rows="2"
					cols="20"
					wrap="hard"
					id="submission"
					ref={bodyInput}
				></textarea>
				<br />
				<input type="submit" value="Submit Article" />
			</form>
		</div>
	);
}
