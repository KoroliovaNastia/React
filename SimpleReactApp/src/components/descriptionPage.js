import React, {Component} from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'



class DescriptionPage extends Component {

    filterMoviesByParamAndQuery(movies, filter, query){
        const updatedMovies =  movies.map( movie => {
          return {...movie, isShowing: movie[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1};
        })
        
        return updatedMovies;
      }

    render() {
        const {logo, movieId, movieList} = this.props;

        const filteredMoviesByGenre = this.filterMoviesByParamAndQuery(movieList, "genre", moviesDescriptionPage[movieId].genre)
      
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