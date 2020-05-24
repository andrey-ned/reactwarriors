import React, { Component } from "react";
import MovieItem from "./MovieItem";
import {API_KEY, API_URL} from "../../API/api";

export default class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const link = `${API_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    movies: data.results
                });
            });
    }

    removeMovie = movie_id =>{
        const  updateMovies = this.state.movies.filter(  (item) => {
            return item.id !== movie_id;

        })
        this.setState({movies: updateMovies});
    }

    render() {
        const { movies } = this.state;
        return (
            <div className="row">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="col-6 mb-4">
                            <MovieItem item={movie}
                                       key={movie.id}
                                       remove={this.removeMovie}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}