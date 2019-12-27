import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchIcon from './searchIcon';
import Header from './header';
import Logo from './logo';
import MovieDescription from './movieDescription';
import Box from './box';
import Footer from './footer';
import Main from './main';
import {
  searchMovies, getMovieById, movie, getMovies,
} from '../redux/actions/get';

class DescriptionPage extends React.Component {
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
      mainMovie, movieId, updateMovieList, getMovie,
    } = this.props;
    if (movieId !== prevProps.movieId) {
      getMovie(movieId);
    }
    if (mainMovie !== prevProps.mainMovie) {
      updateMovieList(mainMovie.genres);
    }
  }

  render() {
    const { mainMovie } = this.props;
    if (mainMovie === null) return <p>No film</p>;
    return (
      <>
        <Header>
          <Logo />
          <MovieDescription />
          <SearchIcon to="/movies" />
        </Header>
        <Box>
          <p>
Films by
            {mainMovie.genres.map((genre) => <span key={mainMovie.title + genre}>{`${genre} `}</span>)}
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

export const loadDescriptionData = (path) => {
  const id = path.split('/').pop();
  const mainMovie = movie(id);
  return Promise.all([mainMovie]).then((result) => {
    console.log();
    const movies = getMovies(`/movies?limit=8&sortOrder=asc&filter=${result[0].genres}`);
    return Promise.all([movies]).then((data) => ({ movieList: data[0], movie: result[0] }));
  });
};

function mapStateToProps(store, ownProps) {
  return {
    movieList: store.movieState.movieList,
    mainMovie: store.movieState.movie,
    movieId: Number(ownProps.match.params.id),
  };
}

export const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(getMovieById(id)),
  updateMovieList: (genres) => dispatch(searchMovies('', '', '', 'asc', genres)),
});


export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPage);

DescriptionPage.propTypes = {
  mainMovie: PropTypes.instanceOf(Object),
  movieId: PropTypes.number.isRequired,
  updateMovieList: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

DescriptionPage.defaultProps = {
  mainMovie: null,
};
