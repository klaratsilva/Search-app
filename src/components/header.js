import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";


const Header = () => {

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' >
              .SEARCHY
            </NavLink>
          </div>
          <nav>
            <ul className='nav-links'>
              <li>
                <NavLink to='/' >
                  Search
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
