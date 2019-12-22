/* eslint-disable camelcase */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './image';

const StyledMovie = styled.div`
  background-color: #232323e6;
  display: inline-block;
  width: 78%;
  padding-left: 50px;
  margin-left: 90px;
  margin-top: 40px;
`;

const Block = styled.div`
  display: inline-block;
  width: 60%;
  margin-left: 50px;
`;

class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      movie: {
        poster_path, title, release_date, vote_average, runtime, overview,
      },
    } = this.props;
    return (
      <StyledMovie>
        <Image image={poster_path} />
        <Block>
          <p>{title}</p>
          <p>{vote_average}</p>
          <p>
            {release_date}
            {' '}
year
            {' '}
            {runtime}
            {' '}
min
          </p>
          <p>{overview}</p>
        </Block>
      </StyledMovie>
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
    overview: PropTypes.string.isRequired,
  }).isRequired,
};
