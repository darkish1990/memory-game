import React from "react";
import Game from "./pages/Game/Game";
import StartingPage from "./pages/StartingPage/StartingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameContextProvider from "./contexts/GameContext";
import Victory from "./components/Winner/Winner";

function App() {
  return (
    <div className="App">
      <Router>
        <GameContextProvider>
          <Route path="/" exact component={StartingPage} />
          <Route path="/game" render={(props) => <Game {...props} />} />
          <Route path="/victory" component={Victory} />
        </GameContextProvider>
      </Router>
    </div>
  );
}

export default App;
