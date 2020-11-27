import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";


const Header = ({ setSearchInput }) => {

  const handleClear = () => {
    setSearchInput("");
  }

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink onClick={handleClear} to='/' exact>
              .SEARCHY
            </NavLink>
          </div>
          <nav>
            <ul className='nav-links'>
              <li>
                <NavLink onClick={handleClear} to='/' exact>
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to='/users' exact>
                  Users
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
