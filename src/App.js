import React from "react";
import { Route, Switch } from "react-router-dom";
/* import { BrowserRouter } from "react-router-dom"; */
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const App = () => {

  return (
    <>
      <Header />
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users/:name" children={<Users />} >
          </Route>
        </Switch>
      </div>

    </>
  );
}

export default App;
