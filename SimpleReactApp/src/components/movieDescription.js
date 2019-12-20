/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './image';

class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      movie: {
        poster_path, title, release_date, vote_average, runtime, description,
      },
    } = this.props;
    return (
      <>
        <Image image={poster_path} />
        <div>
          <p>{title}</p>
          <p>{vote_average}</p>
        </div>
        <div>
          <p>
            {release_date}
            {' '}
year
            {' '}
            {runtime}
            {' '}
min
          </p>
          <p>{description}</p>
        </div>
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    movie: store.movieState.movie,
  };
}

export default connect(mapStateToProps)(MovieDescription);

MovieDescription.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
