import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div id='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>View Cart ({props.cartSize})</Link>
    </div>
  );
};

export default Navbar;
