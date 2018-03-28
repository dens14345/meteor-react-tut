import React, { Component } from 'react';
import routes from '../../startup/client/routes';



export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{routes}
			</div>
		)
	}
}
