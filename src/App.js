import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./Character";
import AllCharacters from "./AllCharacters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character/");
    const itemsArray = await data.json();
    const items = itemsArray.results;
    // console.log(items);
    setItems(items);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={props => <AllCharacters {...props} items={items} />}
          />
          <Route
            path="/character"
            render={props => <Character {...props} items={items} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
