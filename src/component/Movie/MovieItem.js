import React from "react";

export default class MovieItem extends React.Component {
    constructor() {
        super();

        this.state = {
            overview: false,
        };
    }

    showOverview = () => {
        return this.setState({overview: !this.state.overview})
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
                        <button >Will watch</button>
                    </div>
                </div>
            </div>
        );
    }
}