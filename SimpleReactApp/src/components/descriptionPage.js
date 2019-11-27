import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'



class DescriptionPage extends Component {


    render() {
        const {logo, movieId, movieList, filterMoviesByParamAndQuery} = this.props;
        const movie = movieList[movieId];

        const filteredMoviesByGenre = filterMoviesByParamAndQuery(movieList, "genre", movie.genre); 
        filteredMoviesByGenre[movieId] = {...filteredMoviesByGenre[movieId], isShowing: false};
      
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