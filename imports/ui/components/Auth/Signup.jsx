import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {

	_onSubmit(e) {
		e.preventDefault();
		let email = this.refs.email.value;
		let password = this.refs.password.value;

		Accounts.createUser({ email, password }, (err, succ) => {
			console.log(err);
			console.log(succ);
		})
	}

	render() {
		return (
			<div className="boxed-view">
				<div className="card-panel hoverable">
					<h3>Signup</h3>
					<form onSubmit={this._onSubmit}>
						<input ref="email" placeholder="email" type="text"/>
						<input ref="password" placeholder="password" type="text"/>
						<button className="btn" onClick={this._onSubmit.bind(this)}>submit</button>
					</form>
					<p>_</p>
					<Link to="login">
						Already have an account?
					</Link>
				</div>
			</div>
		)
	}
}


