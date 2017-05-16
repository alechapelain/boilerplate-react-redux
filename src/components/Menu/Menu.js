import React from 'react';
import './Menu.scss';
import Navigation from '../../modules/Navigation';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="link-list">
          <li onClick={Navigation.goToHome}><a>Home</a></li>
          <li onClick={Navigation.section.goToInit}><a>Section</a></li>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {};

export default Menu;
