/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './image';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      movie: {
        id, poster_path, title, genres, release_date, vote_average,
      },
    } = this.props;
    return (
      <div className="movie">
        <Image image={poster_path} />
        <Link to={`/film/${id}`}>{title}</Link>
        <ul>
          {genres.map((genre) => <p key={title + genre}>{genre}</p>)}
        </ul>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    );
  }
}

export default withRouter(Movie);

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    id: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
