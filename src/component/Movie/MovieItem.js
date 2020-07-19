import React from "react";

export default class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            overview: false,
            forWatch: false,
        };
    }

    showOverview = () => {
        return this.setState({overview: !this.state.overview})
    }
    forWatching = () => {
        return this.setState({forWatch: !this.state.forWatch})
    }


    addForWatch = movie => {
        const setWill = this.props.setter;
        setWill(movie);
    }

    removeForWatch = movie_id =>{
        const delWill = this.props.delete;
        delWill(movie_id);
    }

    render() {
        const { item, remove } = this.props;

        return (
            <div className="card" style={{ width: "100%" }}>
                <img
                    className="card-img-top card-img--height"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                    item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="card-text">Рейтинг: {item.vote_average}</div>
                    <div>
                        <button onClick={this.showOverview}>{this.state.overview ? "Hide" : "Show" }</button>
                        {this.state.overview ? <p>{item.overview}</p> : ""}
                        <button onClick={remove.bind(null, item.id)}> Delete</button>
                        {!this.state.forWatch ?
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>{
                                    this.forWatching();
                                    this.addForWatch(item)
                                }}
                            >Add watch </button> :
                            <button
                                onClick={() =>{
                                    this.forWatching();
                                    this.removeForWatch(item.id)
                                    }}
                                type="button"
                                className="btn btn-success"
                            >Remove watch </button>}

                    </div>
                </div>
            </div>
        );
    }
}