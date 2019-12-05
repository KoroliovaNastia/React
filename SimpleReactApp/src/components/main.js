import React, { Component} from "react";
import Movie from './movie';
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {movieList: state.movieList};
}

class Main extends Component {

    render() {
        const {movieList} = this.props;
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
                        movieList.filter(movie => movie.isShowing).map((movie) => {
                            return <div key={movie.id} className="col-lg-4"><Movie key={movie.id} movie={movie}/></div>
                        })
                    }
                </div>
            </div>
            );
        }
    }
}



export default connect(mapStateToProps)(Main)