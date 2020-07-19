import React, { Component } from "react";
import MovieItem from "./MovieItem";
import {API_KEY, API_URL} from "../../API/api";


export default class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            sort_by: "popularity.desc",

        };
    };


    componentDidMount() {
        const link = `${API_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&page=1&sort_by=${this.state.sort_by}&page=${this.props.page}`;

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
    componentDidUpdate(prevProps, prevStates) {
        if (prevProps.page !== this.props.page){
            const link = `${API_URL}/discover/movie?api_key=${API_KEY}&language=ru-RU&page=1&sort_by=${this.state.sort_by}&page=${this.props.page}`;

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

    }


    removeMovie = movie_id =>{
        const  updateMovies = this.state.movies.filter(  (item) => {
            return item.id !== movie_id;

        })
        this.setState({movies: updateMovies});
    }



    render() {
        const { movies } = this.state;
        const setMovie = this.props.setWillList;
        const delMovie = this.props.deleteWillList

        return (
            <div className="row">

                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="col-6 mb-4">
                            <MovieItem item={movie}
                                       remove={this.removeMovie}
                                       setter={setMovie}
                                       delete={delMovie}

                            />
                        </div>
                    );
                })}

            </div>

        );
    }
}