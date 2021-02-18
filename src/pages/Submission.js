import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Submission(props) {
	const [articles, setArticles] = useState([]);
	const titleInput = useRef(null);
	const bodyInput = useRef(null);
	const summaryInput = useRef(null);

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
		const summaryValue = summaryInput.current.value;
		try {
			const response = await fetch('/api/articles', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: titleValue,
					body: bodyValue,
					summary: summaryValue
				})
			});
			const data = await response.json();
			setArticles([...articles, data]);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="SubmissionPage">
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				Title: <input type="text" ref={titleInput} /> <br />
				Summary: <input type="text" ref={summaryInput} /> <br />
				Body:{' '}
				<textarea
					rows="2"
					cols="20"
					wrap="hard"
					id="submission"
					ref={bodyInput}
				></textarea>
				<br />
				<input type="submit" id="SubmitButton" value="Submit Article" />
			</form>
		</div>
	);
}
