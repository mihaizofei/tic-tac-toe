import React, { useState } from 'react';
import Square from './Square';
import { Button } from '@material-ui/core';
import { Grid } from '@mui/material';


function Board({ onWinner, onPlayerChange, xIsNext }) {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const newSquares = squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        onWinner(calculateWinner(newSquares));
        onPlayerChange(!xIsNext);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    };
  
  const renderGridItem = (i) => {
    return <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                {renderSquare(i)}
              </Grid>
              <Grid item>
                {renderSquare(i+1)}
              </Grid>
              <Grid item>
                {renderSquare(i+2)}
              </Grid>
            </Grid>
          </Grid>
  }

    const resetBoard = () => {
        setSquares(Array(9).fill(null));
        onPlayerChange(true);
        onWinner(null)
    }

    const winner = calculateWinner(squares);
    const status = winner ? 'Winner: ' + winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <Grid container justifyContent="center">
          {renderGridItem(0)}
          {renderGridItem(3)}
          {renderGridItem(6)}
          {calculateWinner(squares) && <Button onClick={resetBoard} color="secondary">Restart</Button>}
        </Grid>
      </div>
    );
}

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}