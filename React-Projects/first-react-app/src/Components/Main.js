import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import BoxesList from "./BoxesList";
import AnimalsList from "./AnimalsList";



const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};
const Gallery = () => {
  return (
    <div>
      <h1>This is the gallery page</h1>
    </div>
  );
};
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/boxes">Boxes</Link>
        </li>
        <li>
          <Link to="/animals">Animals</Link>
        </li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/boxes" component={BoxesList}></Route>
        <Route path="/animals" component={AnimalsList}></Route>
      </Switch>
    </div>
  );
};

export default Main;