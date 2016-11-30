import React from 'react';
import headerStyle from './styles/headerStyles';

const Header = (props) => (
  <div style={headerStyle}>
    <h1>{`${props.myName}'s React Reference Guide`}</h1>
  </div>
);

export default Header;
