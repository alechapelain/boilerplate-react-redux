import React from 'react';
import './CoreLayout.scss';
import Login from '../../../components/Login/Login';
import Menu from '../../../components/Menu/Menu';
import Utils from '../../../modules/Utils';

class CoreLayout extends React.Component {
  render() {
    let template;
    if (Utils.isDefined(this.props.core.token)) {
      template = (
        <div className="container">
          <Menu />
          <div className="wrapper">{this.props.children}</div>
        </div>
      );
    } else {
      template = (
        <div>
          <Login action={this.props.authenticate} />
        </div>
      );
    }

    return template;
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.object.isRequired,
  core: React.PropTypes.object,
  authenticate: React.PropTypes.func
};

export default CoreLayout;
