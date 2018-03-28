import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

	_login = (e) => {
		e.preventDefault();

		let email = this.refs.login_email.value;
		let password = this.refs.login_password.value;
		Meteor.loginWithPassword({ email }, password, (error, success) => {
			if (error) {
				console.log(error);
				return;
			}

			console.log('you are logged in');
		})
	}

	render() {
		return (
			<div className="boxed-view">
				<div className="card-panel hoverable">
					<h3>Login</h3>
					<form>
						<input ref="login_email" placeholder="email" type="text"/>
						<input ref="login_password" placeholder="password" type="text"/>
						<button className="btn" onClick={this._login.bind(this)}>login</button>
					</form>
					<p>_</p>
					<Link to="signup">
						Create an account
					</Link>
				</div>
			</div>
		)
	}
}
