import React, { useState } from "react";
import '../style/Board.css';

function Board({ isBlackTurn, setIsBlackTurn }) {
  const BOARD_SIZE = 9;
  const [boardState, setBoardState] = useState(
    Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null))
  );

  const handleClick = (e) => {
    const x = e.target.dataset.x;
    const y = e.target.dataset.y;
    if(boardState[y][x]) return; // すでに石がある場合は無視
    console.log(`clicked ${x}, ${y}`);
    const newBoardState = boardState.map((row) => row.slice());
    newBoardState[y][x] = isBlackTurn ? "black" : "white";
    console.log(newBoardState[y][x]);
    setBoardState(newBoardState);
    setIsBlackTurn(!isBlackTurn);
  };

  return (
    <div className="board">
      {boardState.map((row, y) =>
        row.map((cell, x) => (
          <button
            key={`${x}-${y}`}
            className={`dot ${cell ? cell : ""}`}
            data-x={x}
            data-y={y}
            onClick={handleClick}
          />
        ))
      )}
    </div>
  );
}

export default Board;
