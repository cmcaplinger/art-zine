import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ShowArticle from '../pages/ShowArticle';
import Submission from '../pages/Submission';
import Home from '../pages/Home';
import UpdateArticle from '../pages/UpdateArticle';

const routes = [
	{
		Component: ShowArticle,
		key: 'ShowArticle',
		path: '/articles/:id'
	},
	{
		Component: UpdateArticle,
		key: 'UpdateArticle',
		path: '/articles/:id/edit'
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
];

export default routes;
