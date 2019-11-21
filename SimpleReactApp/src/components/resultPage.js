import React from 'react'
import Header from './header'
import Logo from './logo'
import MovieDescription from './movieDescription'
import Box from './box'
import Footer from './footer'
import Main from './main'

const ResultPage = ({logo, movie, filteredMovieList}) => 
    <>
        <Header>
            <Logo logo = {logo}/>
            <button/>
            <MovieDescription movie={movie}/>
        </Header>
        <Box>
            <p>Films by {movie.genre} genre</p>
        </Box>
        <Main movieList={filteredMovieList}/>
        <Footer>
            <Box>
            <Logo logo = {logo}/>
            </Box>
        </Footer>
    </>

export default ResultPage