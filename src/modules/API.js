import Resource from './Resource';

const API = {
  getPostById: (postId) => {
    return Resource.get('https://jsonplaceholder.typicode.com/posts/:postId', {
      postId: postId
    }, {
      method: 'GET'
    });
  },
  getCommentListByPostId: (postId) => {
    return Resource.get('https://jsonplaceholder.typicode.com/posts/:postId/comments', {
      postId: postId
    }, {
      method: 'GET'
    });
  },
  getMovieByName: (movieTitle) => {
    return Resource.get('http://www.omdbapi.com', {
      t: movieTitle,
      y: '',
      plot: 'short',
      r: 'json'
    }, {
      method: 'GET'
    });
  }
};

export default API;
