import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movie/MovieList";
import MovieItem from "./Movie/MovieItem";

export default class App extends React.Component {
    constructor() {
        super();
        this.state={
            page:1,
            moviesForWatch: [],
        }
    }

    setWillWatch = movie => {

        this.setState({moviesForWatch: [...this.state.moviesForWatch, movie]})

    }

    delWillWatch = movie_id => {
        console.log(movie_id)
        console.log(this.state.moviesForWatch)
        const  updateMovies = this.state.moviesForWatch.filter(  (item) => {
            return item.id !== movie_id;
        })
        this.setState({moviesForWatch: updateMovies});
}

    render() {
        return (
            <div className="container">

                <div className="row mt-4">
                    <div className="col-3">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <Filters/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <MoviesList page={this.state.page}
                                    setWillList={this.setWillWatch}
                                    deleteWillList={this.delWillWatch}/>
                    </div>
                    <div className="col-3 border border-35" >
                        <div><h2 style={{textAlign: "center"}}>Will Watch({this.state.moviesForWatch.length}): </h2>
                        </div>
                        <div>{this.state.moviesForWatch.map(item => {
                                return (
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <div className="card-text">Рейтинг: {item.vote_average}</div>
                                    </div>);
                        }
                        )}</div>
                    </div>
                </div>
            <div style={{paddingLeft:"25%"}}>
                <button
                    style={{float:"left", padding:15,}}
                    onClick={() => {
                        if(this.state.page > 1){
                            this.setState({page: this.state.page -1})
                        }
                    }}

                > &lt;&lt; Back</button>
                <h4 style={{float:"left", padding:15,}}>{this.state.page}</h4>
                <button
                    style={{ padding:15,}}
                    onClick={() =>{
                    this.setState({
                        page: this.state.page + 1})
                }}
                >Next>></button>
            </div>
            </div>
        );
    }
}