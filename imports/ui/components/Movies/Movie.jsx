import React, { Component } from 'react';

export default class Movie extends Component {
	render() {
		return (
			<div className="card-panel hoverable">
				<h1>title: {this.props.movie.title}</h1>
				<h3>rating: {this.props.movie.rating}</h3>
			</div>
		);
	}
}
