import React from 'react';
import Board from './Board';
import './App.css';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      cells: Array(9).fill(null),
      stepCounter: 1,
      whoNext: 'X',
      winner: null
    } 
  }

  handleClick = (index) => {
    let {cells, stepCounter, whoNext, winner} = this.state;
    cells = [...cells];
    if(cells[index] || winner) return;
    cells[index] = whoNext;
    whoNext = whoNext === 'X' ? '0' : 'X';
    stepCounter = stepCounter + 1;
    winner = this.getWinner(cells);
    this.setState({
      cells,
      whoNext,
      stepCounter,
      winner
    })
  }

  resetGame = () => {
    this.setState({
      cells: Array(9).fill(null),
      stepCounter: 1,
      whoNext: 'X',
      winner: null
    }); 
  }

  renderResetButton(winner, stepCounter) {
    if(winner || stepCounter === 10) {
      return <button onClick={this.resetGame}>New Game</button>
    }
  }

  render() {
    const {cells, whoNext, winner, stepCounter} = this.state;
    let  gameStatus;
    if (winner) {
      gameStatus = `Player ${winner} wins!`;
    } else if (stepCounter === 10) {
      gameStatus = 'It is DRAW!';
    } else {
      gameStatus = `Player ${whoNext}, your turn`
    }
    return (
      <div className="Game">
        <h1>Tic Tac Toe, step: {stepCounter}</h1>
        <h3> {gameStatus} </h3>
        {this.renderResetButton(winner, stepCounter)}

        <Board cells={cells} onClick={this.handleClick}/>
      </div>
    );
  }

  getWinner(cells) {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const [winCombination] = winLines.filter( (combination) => {
      let [a,b,c] = combination;   
      return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
    });
    if (winCombination) {
      return cells[winCombination[0]];    
    } else {
      return null;
    }
  }
  
}

export default Game;
