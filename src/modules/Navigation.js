import { hashHistory } from 'react-router';

let Navigation = {
  goToTop: () => {
    window.scrollTo(0, 0);
  },
  goTo404: () => {
    Navigation.goToTop();
    hashHistory.push('/404');
  },
  goToHome: () => {
    Navigation.goToTop();
    hashHistory.push('/');
  },
  goToMovieFinder: () => {
    Navigation.goToTop();
    hashHistory.push('/movie-finder');
  }
};

export default Navigation;
