import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Signup from '../Auth/Signup';
import Login from '../Auth/Login';

export default class SignupContainer extends Component {

	_logout(e) {
		e.preventDefault();
		Meteor.logout(() => {
			console.log('logged out');
		});
	}

	render() {
		return (
			<div>
				<h1>Signup Component</h1>

				<Signup/>

				<button className="waves-effect waves-light btn">test</button>
				<a className="waves-effect waves-light btn">anchor tag</a>


				<Login/>

				<button onClick={this._logout.bind(this)} className="red">logout</button>
			</div>
		)
	}
}



