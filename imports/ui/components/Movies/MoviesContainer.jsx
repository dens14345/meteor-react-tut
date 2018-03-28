import React, { Component } from 'react';
import Movie from './Movie';
import FlipMove from 'react-flip-move';



export default class MoviesContainer extends Component {

	constructor() {
		super()
		this.state = {
			movies: [
				{ title: 'anohana', rating: '9/10' },
				{ title: 'John wick', rating: '8.5/10' },
				{ title: 'Captain america', rating: '9/10' }
			]
		}
	}


	_addMovie() {
		let title = this.refs.title.value;
		let rating = this.refs.rating.value;
		let arr = this.state.movies;
		arr.push({
			title: title,
			rating: rating
		});
		this.setState({
			movies: arr
		});
	}

	_removeMovie(){
		let arr = this.state.movies;
		arr.pop();
		this.setState({
			movies: arr
		})
	}


	render() {
		return (
			<div className="container">
				<button onClick={this._addMovie.bind(this, "test param")} className="btn">Add movie</button>
				<button className="btn red" onClick={this._removeMovie.bind(this)}>Remove movie</button>
				<div className="input-field">
					<input ref="title" type="text" name="title"/>
					<label htmlFor="title">Title</label>
				</div>
				<div className="input-field">
					<input ref="rating" type="text" name="rating"/>
					<label htmlFor="rating">Rating</label>
				</div>
				<FlipMove maintainContainerHeight={true}>
					{this.state.movies.map((movie, index) =>
							<Movie
								movie={movie}
								key={index}
							/>
					)}
				</FlipMove>




			</div>
		);
	}
}
