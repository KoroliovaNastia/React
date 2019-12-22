import React, { Component } from 'react';
import SearchIcon from './searchIcon';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './header';
import Logo from './logo';
import MovieDescription from './movieDescription';
import Box from './box';
import Footer from './footer';
import Main from './main';
import { searchMovies, getMovieById } from '../redux/actions/get';
import styled from 'styled-components'

class DescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { movieId, getMovie } = this.props;
    getMovie(movieId);
  }

  componentDidUpdate(prevProps) {
    const {
      movie, movieId, updateMovieList, getMovie,
    } = this.props;
    if (movieId !== prevProps.movieId) {
      getMovie(movieId);
    }
    if (movie !== prevProps.movie) {
      updateMovieList(movie.genres);
    }
  }

  render() {
    const { movie } = this.props;
    if (movie === null) return <p>No film</p>;
    return (
      <>
        <Header>
          <Logo />
          <MovieDescription />
          <SearchIcon to={'/movies'}/>
        </Header>
        <Box>
          <p>
Films by
            {movie.genres.map((genre) => <span key={movie.title + genre}>{`${genre} `}</span>)}
genres
          </p>
        </Box>
        <Main />
        <Footer>
          <Box>
            <Logo />
          </Box>
        </Footer>
      </>
    );
  }
}

function mapStateToProps(store, ownProps) {
  return {
    movieList: store.movieState.movieList,
    movie: store.movieState.movie,
    movieId: Number(ownProps.match.params.id),
  };
}

export const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(getMovieById(id)),
  updateMovieList: (genres) => dispatch(searchMovies('', '', '', 'asc', genres)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);

// DescriptionPage.propTypes = {
//   movie: PropTypes.objectOf(PropTypes.object).isRequired,
//   movieId: PropTypes.number.isRequired,
//   updateMovieList: PropTypes.func.isRequired,
//   getMovie: PropTypes.func.isRequired,
// };
