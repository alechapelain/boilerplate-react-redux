import React from 'react';
import './CoreLayout.scss';
import Login from '../../../components/Login/Login';
import Menu from '../../../components/Menu/Menu';
import Utils from '../../../modules/Utils';

class CoreLayout extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
