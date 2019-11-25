import React, {Component} from 'react';
import Box from './components/Box';
import Player from './components/Player'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  handlePlayer = (index) => {
    if(this.state.player){
      let newBoard = this.state.board
      if(!newBoard[index] && !this.state.winner){
      newBoard[index] = this.state.player
      let newPlayer = this.state.player === "X" ? "O" : "X"
      this.setState({
        board: newBoard,
        player: newPlayer
      })
      this.checkWins()
      }
    }
  }  

  checkWins = () => {
    const posWins = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i=0; i<posWins.length;i++){
      const [a,b,c] = posWins[i]
      let {board} = this.state
      if(board[a] && board[a] === board[b] && board[b] === board[c]){
        alert('Won!!!')
        this.setState({
          winner: this.state.player === "X" ? "O" : "X"
        })
      }
    }
  }

  
  handleSubmit =(e) => {
    e.preventDefault()
    let player = e.target.player.value
    this.setState({player})
  }


  handleReset = () => {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }
  render(){

    return (
    <div className="App">
      <h1>TicTacToe App</h1>
      <Player 
        data={this.state}
        winner={this.state.winner}
        submit={this.handleSubmit} 
        reset={this.handleReset} 
      />
      <Box 
        boxes={this.state.board} 
        handlePlayer={this.handlePlayer}
      />
    </div>
  );
 }
}

export default App;
