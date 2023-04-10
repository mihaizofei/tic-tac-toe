import React, { useState } from 'react';
import Board from './components/Board';

function App() {

  const [winner, setWinner] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);

  const handleWinner = (winner) => {
    setWinner(winner);
  };

  const handlePlayerChange = (xIsNext) => {
    setXIsNext(xIsNext);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board onWinner={handleWinner} onPlayerChange={handlePlayerChange} xIsNext={xIsNext} />
      {winner && <h2>{winner} wins!</h2>}
    </div>
  );
}

export default App;
