import React, { Component} from "react";
import Movie from './movie';
import {connect} from "react-redux";
import store from "../redux/store";


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
                        movieList.map((movie) => {
                            return <div key={movie.id} className="col-lg-3"><Movie key={movie.id} movie={movie}/></div>
                        })
                    }
                </div>
            </div>
            );
        }
    }
}

const mapStateToProps = function(store) {
    return {
      movieList: store.movieState.movieList
    };
  }

export default connect(mapStateToProps)(Main)