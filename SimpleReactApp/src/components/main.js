import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from './movie';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movieList } = this.props;
    if (movieList === null || movieList === undefined) {
      console.log(movieList);
      return (
        <div className="container">
          <h2>No films found</h2>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          {
            movieList.map((movie) => (
              <div key={movie.id} className="col-lg-3 col-md-4">
                <Movie key={movie.id} movie={movie} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    movieList: store.movieState.movieList,
  };
}

export default connect(mapStateToProps)(Main);

// Main.propTypes = {
//   movieList: PropTypes.arrayOf(Object),
// };

Main.defaultProps = {
  movieList: null,
};
