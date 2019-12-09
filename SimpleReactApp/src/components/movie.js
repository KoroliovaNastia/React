import React, { Component } from "react";
import Image from "./image";

class Movie extends Component {
    render(){
        const {poster_path, title, genres, release_date, vote_average} = this.props.movie;
        return (
            <div className='movie'>
                <Image image={poster_path} />
                <p>{title}</p>
                <ul>
                    {genres.map( genre => <p key={title + genre}>{genre}</p>)}
                </ul>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </div>
        );
    }
}

export default Movie