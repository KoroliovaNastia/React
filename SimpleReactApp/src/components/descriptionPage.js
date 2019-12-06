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
         this.props.getMovie(this.props.movieId)
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
        const {logo, movie} = this.props;

        if(movie === null) return <p>No film</p>

        const filteredMovies = getMovies("", "", "", movie.genres[0])
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
                <p>Films by {movie.genres[0]} genre</p>
            </Box>
            <Main movieList={filteredMovies}/>
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
       //movieList: filteredMovies,
       movie: store.movieState.movie
     };
 }

 function mapDispatchToProps(dispatch){
     return {
         getMovie: id => getMovieById(id)
    } 
 }

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage)