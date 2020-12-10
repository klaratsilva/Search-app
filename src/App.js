import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/users/:name", name: "Users", Component: Users },
  /*  { path: "/users", name: "Users", Component: Users }, */
];

const App = () => {

  /* const [userData, setUserData] = useState([])
  const [reposData, setReposData] = useState([])

 */
  return (

    <>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Switch>
            {routes.map(({ path, Component }) => (

              <Route key={path} path={path}>
                <Component />
              </Route>

            ))}
          </Switch>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
