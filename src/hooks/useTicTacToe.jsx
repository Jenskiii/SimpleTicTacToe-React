import { useState } from "react";
const initialBoard = () => Array(9).fill(null);

export const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setisXNext] = useState(true);

  // all possible win outcomes
  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // calculate winner
  const calculateWinner = (currentBoard) => {
    // loop through win patterns
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      // assign the 3 options to 3 vars : a, b, c
      const [a, b, c] = WINNING_PATTERNS[i];
      // if all options match return winner
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    //  else if no winner return null
    return null;
  };

  // handle click on tile
  const handleClick = (index) => {
    const winner = calculateWinner(board);
    // if winner or tile clicked return
    if (winner || board[index]) return;

    // else create board copy and add X or O to clicked tile based on isXNext true or false
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    // overwrite old board with new board that has new click
    setBoard(newBoard);
    // isXNext will toglle between true and false
    setisXNext(!isXNext);
  };

  // show whos turn it is + winner or draw message
  const getStatusMessage = () => {
    const winner = calculateWinner(board);

    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return "Its a draw!";

    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  // reset game
  const resetGame = () => {
    setBoard(initialBoard());
    setisXNext(true);
  };

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};
