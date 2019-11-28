import React, { Component } from "react";
import Image from "./image";

class Movie extends Component {
    render(){
        const {image, title, genre, release_date, rating} = this.props.movie;
        return (
            <div className='movie'>
                <Image image={image} />
                <p>{title}</p>
                <p>{genre}</p>
                <p>{release_date}</p>
                <p>{rating}</p>
            </div>
        );
    }
}

export default Movie