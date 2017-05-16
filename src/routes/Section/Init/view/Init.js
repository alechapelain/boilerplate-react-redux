import React from 'react';

import './Init.scss';

class Init extends React.Component {
  componentDidMount() {
    this.props.getMovieByName('Inception');
  }

  render() {
    /**
     * Formatting the details of the retrieved movie from the store
     */
    let movie = this.props.init.movieSelected;

    const movieDataList = Object.keys(movie).map(function(key, index) {
      return (
        <li key={index}>
          <strong>{key}</strong> {movie[key]}
        </li>
      );
    });

    /**
     * Formatting the list of users from the store
     */
    const dataList = this.props.init.data.list.map(function(item) {
      return (
        <li key={item.id}>
          <strong>Name:</strong> {item.name} <br />
          <strong>Job:</strong> {item.job}
        </li>
      );
    });

    /**
     * The component template
     */
    return (
      <div className="section init">
        <h2>API Call and store datas</h2>
        <h4>Movie Name: {movie.Title}</h4>
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
        <ul className="movie-detail-list">
          {movieDataList}
        </ul>

        <h2>Simple interaction with store datas</h2>
        <button type="button" className="btn-add" onClick={this.props.addData}>Add a user to the list</button>
        <ul className="data-list">
          {dataList}
        </ul>


      </div>
    );
  }
}

Init.propTypes = {
  addData: React.PropTypes.func,
  getMovieByName: React.PropTypes.func,
  init: React.PropTypes.object
};


export default Init;
