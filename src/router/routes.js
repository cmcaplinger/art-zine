import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Article from '../pages/Article';

const routes = [
	{
		Component: Article,
		key: 'articles',
		path: 'articles/'
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
		Component: App,
		key: 'home',
		path: '/'
	}

	// insert article and author here
];

export default routes;
