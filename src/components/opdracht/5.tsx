import React, { useState } from "react";
import "./OpdrachtenStyles.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index: number) => {
    if (!winner) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");

      winConditions.forEach((condition) => {
        if (condition.every((i) => newBoard[i] === turn)) {
          setWinner(turn);
        }
      });
    }
  };

  return (
    <div className="cell-holder">
      {board.map((cell, index) => (
        <div onClick={() => handleClick(index)} key={index} className="cell">
          {cell}
        </div>
      ))}
      {winner && (
        <p>
          <h1>{winner} has won!</h1>
        </p>
      )}
    </div>
  );
};

const Vijf = () => {
  return (
    <div className="studenten">
      <TicTacToe />
    </div>
  );
};

export default Vijf;
