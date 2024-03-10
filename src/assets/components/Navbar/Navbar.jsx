
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
       
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/jewelery">Jewelery</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
