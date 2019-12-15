import React, { Component } from "react";
import Image from "./image";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class Movie extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {id, poster_path, title, genres, release_date, vote_average} = this.props.movie;
        return (
            <div className='movie'>
                <Image image={poster_path} />
                <Link to={`/film/${id}`}>{title}</Link>
                <ul>
                    {genres.map( genre => <p key={title + genre}>{genre}</p>)}
                </ul>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        );
    }
}

export default withRouter(Movie)