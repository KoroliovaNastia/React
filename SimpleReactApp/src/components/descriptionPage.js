import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'
import store from '../redux/store'
import {getMovie} from "../redux/actions"

import {connect} from 'react-redux';
import {GET_MOVIE} from "../redux/constants/action-types" 
import { bindActionCreators } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux'

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

class DescriptionPage extends Component {

    constructor(props){
        super(props);
        this.getMovieById = this.getMovieById.bind(this);
        this.getMovieById(this.props.movieId);
    }

    filterMoviesByGenre(mainMovie){
        const {movieList, setIsShowing} = this.props;

        const filteredMovies = movieList.filter(movie => movie.id !== mainMovie.id).map(movie => {
            const isShowing = movie.genre === mainMovie.genre;
            return setIsShowing(movie, isShowing)}
            )
        
        return filteredMovies;    
    }

    getMovieById(movieId){
        let URL = apiURL + "/" + movieId;
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((result) => {
                this.props.dispatch(getMovie(result))
            }
        )}
    )}

    render() {
        const {logo, movie, movieId, movieList} = this.props;
        //const movie = movieList.find(movie => movie.id === movieId);
        //const movie = this.getMovieById

        //const filteredMoviesByGenre = this.filterMoviesByGenre(movie);
        return (
        <>
            <Header>
                <Logo logo = {logo}/>
                <button/>
                <MovieDescription movie={movie}/>
            </Header>
            <Box>
                <p>Films by {movie} genre</p>
            </Box>
            <Main movieList={movieList}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>  
        )
    }
}

function mapStateToProps(store){
    return {
      movieList: store.movieState.movieListByGenre,
      //movie: store.movieState.movie
    };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({getMovie}, dispatch)
// }

export default connect(mapStateToProps)(DescriptionPage)