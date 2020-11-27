import logo from './logo.svg';
import "./styles/App.scss";
import { Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Users from "./pages/users";


const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/users", name: "Users", Component: Users },
];


const App = () => {
  return (
    <>
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
