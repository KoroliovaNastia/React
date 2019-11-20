import React, { Component } from "react";
import Image from "./image";

class Movie extends Component {
    render(){
        const {image, title, genre, releaseDate} = this.props.movie;
        return (
            <div className='movie'>
                <Image image={image} />
                <p>{title}</p>
                <p>{genre}</p>
                <p>{releaseDate}</p>
            </div>
        );
    }
}

export default Movie