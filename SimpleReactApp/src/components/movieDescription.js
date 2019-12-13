import React, {Component} from 'react'
import Image from './image'
import {connect} from 'react-redux';

class MovieDescription extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const {poster_path, title, release_date, vote_average, runtime, description} = this.props.movie;
        return(
            <>
                <Image image={poster_path}/>
                <div>
                    <p>{title}</p>
                    <p>{vote_average}</p>
                </div>
                <div>
                    <p>{release_date} year {runtime} min</p>
                    <p>{description}</p>
                </div>
            </>
        )
    }
}

function mapStateToProps(store){
    return {
      movie: store.movieState.movie,
    };
}

export default connect(mapStateToProps)(MovieDescription)