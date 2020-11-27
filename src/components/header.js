import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Define reducer

const Header = () => {
  /* const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  }); */

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' exact>
              .SEARCHY
            </NavLink>
          </div>
          <nav>
            <ul className='nav-links'>
              <li>
                <NavLink to='/' exact>
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
