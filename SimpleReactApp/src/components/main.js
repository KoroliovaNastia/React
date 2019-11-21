import React, { Component} from "react";
import Movie from './movie'

class Main extends Component {
    render() {
        const {movieList} = this.props;
        return (
        <div className="container">
                <div className="row">
                    {movieList.map((movie)=> <div key={movie.id} className="col-lg-4"><Movie key={movie.id} movie={movie}/></div>)}
                </div>
        </div>
        );
    }
}

export default Main