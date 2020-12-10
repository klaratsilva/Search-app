import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.scss";
import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='App'>
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/users/:name" children={<Users />} >
            </Route>
          </Switch>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
