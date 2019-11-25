import React, {Component} from 'react'

class Player extends Component{

    selPlayer(){
        if(this.props.winner){
          return(
            <h3>Winner is {this.props.winner} <button onClick={() => this.props.reset()}>reset</button></h3>
          )
        }
    
        else if(this.props.data.player){
          for(let i=0;i<this.props.data.board.length;i++){
            if(!this.props.data.board[i]){
              return(
              <h3>Next player is {this.props.data.player} <button disabled={true}>reset</button></h3>
              )
            }
          }
          return(
            <h3>Next player is {this.props.data.player} <button onClick={() => this.props.reset()}>reset</button></h3>
          )
        }
        
        else{
          return(
            <form onSubmit={(e) => this.props.submit(e)} >
            <label>Choose first X: </label><input type="radio" name="player" value="X" /> O: <input type="radio" name="player" value="O" />
            <input type="submit" value="start" />
            <br />
          </form>
          )
        }
    }

    render(){
        return(
            <span>{this.selPlayer()}</span>
        )
    }
}

export default Player;