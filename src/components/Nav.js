import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
        <nav>
            <Link to="/">
              <h3>logo</h3>
            </Link>
            <ul>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/employees">
                  <li>Employees</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
