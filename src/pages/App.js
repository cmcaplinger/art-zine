import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Top from '../components/Top';
import Footer from '../components/Footer';
import Submission from './Submission';

export default function App(props) {
	return (
		<div id="App">
			<Top />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/submissions" component={Submission} />
			</Switch>
			<Footer />
		</div>
	);
}
