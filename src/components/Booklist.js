import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>way of kings</li>
          <li style={{ background: theme.ui }}>name of the wind</li>
          <li style={{ background: theme.ui }}>third book</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;

/*

*/
