import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Submission from './Submission';
import Contributor from './Contributor';
import ShowArticle from './ShowArticle';
import UpdateArticle from './UpdateArticle';
import routes from '../router/routes';

export default function App() {
	return (
		<div id="App">
			<Top />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/submissions" component={Submission} />
				<Route exact path="/contributors" component={Contributor} />
				<Route exact path="/articles/:id" component={ShowArticle} />
				<Route exact path="/articles/:id/edit" component={UpdateArticle} />
			</Switch>
			<Footer />
		</div>
	);
}
