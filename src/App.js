import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/users", name: "Users", Component: Users },
];

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [userData, setUserData] = useState([])
  const [reposData, setReposData] = useState([])


  return (

    <>
      <BrowserRouter>
        <Header setSearchInput={setSearchInput} />
        <div className='App'>
          {routes.map(({ path, Component }) => (
            <Switch>
              <Route key={path} exact path={path}>
                <Component userData={userData} searchInput={searchInput} setSearchInput={setSearchInput} setUserData={setUserData} reposData={reposData} setReposData={setReposData} />
              </Route>
            </Switch>
          ))}
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
