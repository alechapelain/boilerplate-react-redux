import React from 'react';

import posterBlank from '../../static/images/poster.jpg';

import './MovieFinder.component.scss';

class MovieFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSearchInput: ''
    };
  }

  updateMovieSearchInput(e) {
    this.setState({
      movieSearchInput: e.target.value
    }, () => {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.props.searchMovieByName(this.state.movieSearchInput);
      }, 600);
    });
  }

  render() {
    let movie = this.props.movieSelected;
    let movieTemplate;

    /**
     * Search Result
     */
    let searchResultTemplate = this.props.movieSearchList.map((movie, key) => {
      return (
        <div key={key} className="poster-result">
          <h4>{movie.title}</h4>
          <img className="movie-poster sm" src={movie.poster !== null ? movie.poster : posterBlank} alt={movie.title}/> 
        </div>
      );
    });

    /**
     * Movie detail
     */
    const movieDataList = Object.keys(movie).map(function(key, index) {
      if(typeof movie[key] !== 'object') {
        return (
          <li key={index}>
            <strong>{key}</strong> {movie[key]}
          </li>
        );
      }
    });

    if(typeof movie.title !== 'undefined') {
      movieTemplate = (
        <div className="movie-informations">
          <h4>Movie Name: {movie.Title}</h4>
          <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
          <ul className="movie-detail-list">
            {movieDataList}
          </ul>
        </div>
      );
    }

    /**
     * Template
     */
    return (
      <div className="movie-finder">
        <input 
          className="movie-search-input" 
          placeholder="Search a movie" 
          value={this.state.movieSearchInput}
          onChange={(e) => this.updateMovieSearchInput(e)} />

        {searchResultTemplate}
      </div>
    );
  }
}

MovieFinder.propTypes = {
  getMovieByName: React.PropTypes.func,
  searchMovieByName: React.PropTypes.func,
  movieSearchList: React.PropTypes.array,
  movieSelected: React.PropTypes.object
};


export default MovieFinder;
