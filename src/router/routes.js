import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ShowArticle from '../pages/ShowArticle';
import Submission from '../pages/Submission';
import Home from '../pages/Home';
import Contributor from '../pages/Contributor';

const routes = [
	{
		Component: ShowArticle,
		key: 'ShowArticle',
		path: '/articles/:id'
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
		Component: Contributor,
		key: 'contributors',
		path: '/contributors/:id'
	},
	{
		Component: Home,
		key: 'home',
		path: '/'
	}

];

export default routes;
