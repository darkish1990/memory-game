import React from "react";
import { Link } from "react-router-dom";

function WinnerComponent(winner) {
  return (
    <div>
      {winner?.length > 1 ? (
        <div>
          {" "}
          <h1>And The Winner is {winner}</h1>
          <Link to="/">
            <button>Create a new Game</button>
          </Link>
        </div>
      ) : (
        <div>
          {" "}
          <h1>And The Winners are {winner}</h1>
          <Link to="/">
            <button>Create a new Game</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default WinnerComponent;
