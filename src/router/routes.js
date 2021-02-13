import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Article from '../pages/Article';
import Submission from '../pages/Submission';
import Home from '../pages/Home';

const routes = [
	{
		Component: Article,
		key: 'articles',
		path: '/articles'
	},
	{
		Component: About,
		key: 'about',
		path: '/about'
	},
	{
		Component: Contact,
		key: 'contact',
		path: '/contact'
	},
	{
		Component: Submission,
		key: 'submissions',
		path: '/submissions'
	},
	{
		Component: Home,
		key: 'home',
		path: '/'
	}

	// insert article and author here
];

export default routes;
