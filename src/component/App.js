import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movie/MovieList";

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-4">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-body">
                            <Filters/>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">

                    <div className="col-8">
                        <MoviesList />
                    </div>
                </div>

            </div>
        );
    }
}