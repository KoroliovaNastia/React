import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'
import {searchMovies, getMovieById} from "../redux/actions/get"
import {Link} from 'react-router-dom'

import {connect} from 'react-redux';

class DescriptionPage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { movieId, getMovie} = this.props;
        getMovie(movieId)
    }
    componentDidUpdate(prevProps){
        const {movie, movieId, updateMovieList, getMovie} = this.props;
        if(movieId !== prevProps.movieId){
            getMovie(movieId)
        }
        if(movie !== prevProps.movie) {
            updateMovieList(movie.genres)
        }
    }

    render() {
        const {movie} = this.props;
        if(movie === null) return <p>No film</p>
        return (
        <>
            <Header>
                <Logo/>
                <Link to={`/search`}>Search page</Link>
                <MovieDescription/>
            </Header>
            <Box>
                <p>Films by {movie.genres.map( (genre, index) => <span key={movie.title + index}>{genre + " "}</span> )}genres</p>
            </Box>
            <Main/>
            <Footer>
                <Box>
                <Logo/>
                </Box>
            </Footer>
        </>  
        )
    }
}

 function mapStateToProps(store, ownProps){
     return {
       movieList: store.movieState.movieList,
       movie: store.movieState.movie,
       movieId: Number(ownProps.match.params.id)
     };
 }

 function mapDispatchToProps(dispatch){
     return {
         getMovie: id => dispatch(getMovieById(id)),
         updateMovieList: (genres) => dispatch(searchMovies("", "", "", "asc", genres))
    } 
 }



export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage)