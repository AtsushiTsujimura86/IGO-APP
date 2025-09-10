import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import './style/Layout.css';
import TurnSwitch from './components/TurnSwitch';
import BlackTurn from './components/BlackTurn';
import WhiteTurn from './components/WhiteTurn';

function App() {
    const [isBlackTurn, setIsBlackTurn] = useState(true);
  return (
    <div className="App">
        <header className="" style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}><h1>囲碁</h1></header>
        <main className="row mt-5">
            <div className="col-4"></div>
            <div className="col-4">
                <Board className="board" isBlackTurn={isBlackTurn} setIsBlackTurn={setIsBlackTurn} />
            </div>
            <div className="col-2">
                <TurnSwitch  className="switch" isBlackTurn={isBlackTurn} setIsBlackTurn={setIsBlackTurn} />
            </div>
            <div className="col-2">
                <BlackTurn />
                <WhiteTurn />
            </div>
      </main>
    </div>
  );
}

export default App;
