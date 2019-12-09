import React, {Component} from 'react'
import Image from './image'

class MovieDescription extends Component {
    render(){
        const {poster_path, title, release_date, vote_average, duration, description} = this.props.movie;
        return(
            <>
                <Image image={poster_path}/>
                <div>
                    <p>{title}</p>
                    <p>{vote_average}</p>
                </div>
                <div>
                    <p>{release_date} year {duration} min</p>
                    <p>{description}</p>
                </div>
            </>
        )
    }
}

export default MovieDescription