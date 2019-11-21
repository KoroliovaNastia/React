import React, {Component} from 'react'
import Image from './image'

class MovieDescription extends Component {
    render(){
        const {image, title, releaseDate, rating, duration, description} = this.props.movie;
        return(
            <>
                <Image image={image}/>
                <p>{title}</p>
                <p>{rating}</p>
                <p>{releaseDate} year {duration} min</p>
                <p>{description}</p>
            </>
        )
    }
}

export default MovieDescription