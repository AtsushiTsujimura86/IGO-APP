import { useState } from "react";
import '../style/Switch.css'; // 下にCSSあるよ

function TurnSwitch({ isBlackTurn, setIsBlackTurn }) {

  const toggleTurn = () => {
    setIsBlackTurn((prev) => !prev);

  };

  return (
    <div className="">
      <button className="turn-button" onClick={toggleTurn} style={{ color: isBlackTurn ? "white" : "black", backgroundColor: isBlackTurn ? "black" : "white" }}>
        {isBlackTurn ? "黒番" : "白番"}
      </button>
    
    </div>
  );
}

export default TurnSwitch;
