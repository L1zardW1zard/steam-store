import React from "react";
import "./App.scss";
import GameList from "./components/GameList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <GameList />
      </div>
    </div>
  );
}

export default App;
