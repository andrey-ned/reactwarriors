import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movie/MovieList";
import WillWatch from "./Movie/WillWatch";
export default class App extends React.Component {
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
                        <MoviesList />
                    </div>
                    <div className="col-3 border border-35" >
                        <WillWatch/>
                    </div>
                </div>

            </div>
        );
    }
}