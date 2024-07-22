import { useTicTacToe } from "../../hooks/useTicTacToe";
import "./TicTacToe.css";
function TicTacToe() {
  const { board, handleClick, calculateWinner, resetGame, getStatusMessage } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              // disables the button after its been clicked
              // to prevent the player move from changing
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
