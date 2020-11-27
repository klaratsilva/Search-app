import React, { useState } from "react";
import { Route } from "react-router-dom";




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
  const [data, setData] = useState([])




  return (
    <>
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component data={data} searchInput={searchInput} setSearchInput={setSearchInput} setData={setData} />
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
