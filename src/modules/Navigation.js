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
  section: {
    goToInit: () => {
      Navigation.goToTop();
      hashHistory.push('/section');
    }
  }
};

export default Navigation;
