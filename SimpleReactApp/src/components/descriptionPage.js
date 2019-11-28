import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'



class DescriptionPage extends Component {

    filterMoviesByGenre(mainMovie){
        const {movieList, setIsShowing} = this.props;

        const filteredMovies = movieList.filter(movie => movie.id !== mainMovie.id).map(movie => {
            const isShowing = movie.genre === mainMovie.genre;
            return setIsShowing(movie, isShowing)}
            )
        
        return filteredMovies;    
    }

    render() {
        const {logo, movieId, movieList} = this.props;
        const movie = movieList.find(movie => movie.id === movieId);

        const filteredMoviesByGenre = this.filterMoviesByGenre(movie);
      
        return (
        <>
            <Header>
                <Logo logo = {logo}/>
                <button/>
                <MovieDescription movie={movie}/>
            </Header>
            <Box>
                <p>Films by {movie.genre} genre</p>
            </Box>
            <Main movieList={filteredMoviesByGenre}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>
        )
    }
}

export default DescriptionPage