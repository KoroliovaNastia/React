import React, { Component} from "react";
import Movie from './movie'

class Main extends Component {
    sortMovies(){
        const {movieList, sortParam} = this.props;
        let param = sortParam.replace(' ', '_').toLowerCase();
        const sortedMovies = movieList.sort((a, b) => a[param] > b[param]);
        return sortedMovies
    }

    render() {
        const movieList = this.sortMovies();
        if (movieList.length == 0){
            return (
                <div className="container">
                    <h2>No films found</h2>
                </div>
            )
        }
        else
        {
            return (
            <div className="container">
                <div className="row">
                    {
                        movieList.map((movie)=> {
                            if(movie.isShowing)
                            {
                                return <div key={movie.id} className="col-lg-4"><Movie key={movie.id} movie={movie}/></div>
                            }
                        })
                    }
                </div>
            </div>
            );
        }
    }
}

export default Main