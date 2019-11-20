import React, { Component} from "react";
import DefaultImage from '../images/movie-default.jpg'
import Movie from './movie'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [{id: '1', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}, 
                                {id: '2', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'},
                                 {id: '3', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}]}
    }
    render() {
        return (
        <div className="container">
                <div className="row">
                    {this.state.movieList.map((movie)=> <div key={movie.id} className="col-lg-4"><Movie key={movie.id} movie={movie}/></div>)}
                </div>
        </div>
        );
    }
}

export default Main