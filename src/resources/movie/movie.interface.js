import API from '../../modules/API';

const interfaces = {
  parseSearchMovieByName: (response) => {
    let movieList = [];

    for(var i = 0; i < response.Search.length; i++) {
      movieList.push({
        poster: response.Search[i].Poster !== 'N/A' ? response.Search[i].Poster : null,
        title: response.Search[i].Title,
        type: response.Search[i].type,
        year: response.Search[i].year,
        imdbID: response.Search[i].imdbID
      });
    }

    return movieList;
  }
};

export default interfaces;
