import { connect } from 'react-redux';
import CoreLayoutView from '../view/CoreLayout';
import CoreLayoutService from '../services/CoreLayoutService';

const mapDispatchToProps = {
  authenticate: (login, password) => {
    return CoreLayoutService.authenticate({
      store: 'core',
      type: 'setToken'
    }, login, password);
  }
};

const mapStateToProps = (state) => {
  return {
    core: {
      token: state.core.token
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayoutView);
