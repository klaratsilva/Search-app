import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const routes = [
  { path: "/", name: "Home", Component: Home, exact: true },
  { path: "/users/:name", name: "Users", Component: Users, },
  /*   { path: "/users", name: "Users", Component: Users }, */
];

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Switch>
            {routes.map(({ path, Component, exact }) => (
              <Route key={path} path={path} exact={exact} >
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
