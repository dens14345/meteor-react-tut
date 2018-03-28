import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Test from '../../ui/components/Test/Test';
import Login from '../../ui/components/Auth/Login';
import Signup from '../../ui/components/Auth/Signup';
import Link from '../../ui/components/Link/Link';
import MoviesContainer from '../../ui/components/Movies/MoviesContainer';


export default routes = (
	<Router>
		<div>
			<Route path="/test" component={Test}/>
			<Route path="/signup" component={Signup}/>
			<Route path="/login" component={Login}/>
			<Route path="/link" component={Link}/>
			<Route path="/movies" component={MoviesContainer}/>
		</div>
	</Router>
)
