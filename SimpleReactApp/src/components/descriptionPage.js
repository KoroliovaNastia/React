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
import { searchMovies, getMovieById, movie, getMovies } from '../redux/actions/get';

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
          <SearchIcon to="/movies" />
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

const loadData = (path) => {
  const id = path.split('/').pop();
  const mainMovie = movie(id);
  return Promise.all([mainMovie]).then((result) => {
    console.log()
    const movies = getMovies(`/movies?limit=8&sortOrder=asc&filter=${result[0].genres}`)
    return Promise.all([movies]).then((data) => {
      return {'movieList': data[0], 'movie': result[0]}
    })
  })
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


export default { component: connect(mapStateToProps, mapDispatchToProps)(DescriptionPage), loadData };

DescriptionPage.propTypes = {
  movie: PropTypes.instanceOf(Object),
  movieId: PropTypes.number.isRequired,
  updateMovieList: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
};

DescriptionPage.defaultProps = {
  movie: null,
};
