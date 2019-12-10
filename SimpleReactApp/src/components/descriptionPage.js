import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'
import store from '../redux/store'
//import {setMovie} from "../redux/actions"
import {getMovies, getMovieById} from "../redux/actions/get"

import {connect} from 'react-redux';


const apiURL = "https://reactjs-cdp.herokuapp.com/movies";

class DescriptionPage extends Component {

    constructor(props){
        super(props);
        //this.getMovieById = this.getMovieById.bind(this);
       /// this.getMovieById(this.props.movieId);
    }

    componentDidMount(){
        const {movieId, movie, getMovie, getMovieList} = this.props;
        getMovie(movieId)
    }
    componentDidUpdate(){
        const {movieId, movie, getMovie, getMovieList} = this.props;
        getMovieList(movie.genres)
    }

    filterMoviesByGenre(mainMovie){
        const {movieList, setIsShowing} = this.props;

        const filteredMovies = movieList.filter(movie => movie.id !== mainMovie.id).map(movie => {
            const isShowing = movie.genre === mainMovie.genre;
            return setIsShowing(movie, isShowing)}
            )
        
        return filteredMovies;    
    }

    render() {
        const {logo, movie, movieList, getMovieList} = this.props;

        if(movie === null) return <p>No film</p>

        //getMovieList(movie.genres)

        //const filteredMovies = getMovies("", "", "", movie.genres, null)
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
                <p>Films by {movie.genres.map( (genre, index) => <span key={movie.title + index}>{genre + " "}</span> )}genres</p>
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

     //const filteredMovies = getMovies("", "", "", store.movie.genre[0])
     return {
       movieList: store.movieState.filteredMoviesByGenre,
       movie: store.movieState.movie
     };
 }

 function mapDispatchToProps(dispatch){
     return {
         getMovie: id => getMovieById(id),
         getMovieList: (genres) => getMovies("", "", "", "asc", genres)
    } 
 }



export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage)