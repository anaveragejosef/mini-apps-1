import React from 'react';
import ReactDOM from 'react-dom';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ],
      currentPlayer: 1,
      empty: 'white',
      black: 'black',
      red: 'red'
    }
    this.placePiece = this.placePiece.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  placePiece(id) {
    // Create column and future ID vars
    let col;
    id = id.split('');
    let updateColor = id[0];
    if (id[0] === 'a') {
      col = 0;
    } else if (id[0] === 'b') {
      col = 1;
    } else if (id[0] === 'c') {
      col = 2;
    } else if (id[0] === 'd') {
      col = 3;
    } else if (id[0] === 'e') {
      col = 4;
    } else if (id[0] === 'f') {
      col = 5;
    } else if (id[0] === 'g') {
      col = 6;
    }
    // Create var for board column
    var updateBoard = this.state.board.slice();
    // for loop through board at [id] - iterate backwards
    for(let i = updateBoard[col].length - 1; i > -1; i--) {
      // If it is 0, place turn
      if (updateBoard[col][i] === 0) {
        updateBoard[col][i] += this.state.currentPlayer;
        this.setState({
          board: updateBoard
        });
        updateColor += i;
        setColor(updateColor);
        // Then update current player
        this.updatePlayer();
        console.log(this.state.board);
        return;
      }
    }
  }

  // Set the color of the square to indicate piece dropped in
  setColor(id) {
    if (this.state.currentPlayer === 1) {
      document.getElementById(id).style.background = this.state.black;
    } else {
      document.getElementById(id).style.background = this.state.red;
    }
  }

  // Update player state to indicate turn
  updatePlayer() {
    if (this.state.currentPlayer === 1) {
      this.setState({
        currentPlayer: this.state.currentPlayer + 1
      })
    } else {
      this.setState({
        currentPlayer: this.state.currentPlayer - 1
      })
    }
  }

  render () {
    return (
      <div id='game-board' class='game-board'>
        <div class="square" data-x="0" data-y="0" id="a1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="0" id="a2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="0" id="a3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="0" id="a4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="0" id="a5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="0" id="a6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="1" id="b1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="1" id="b2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="1" id="b3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="1" id="b4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="1" id="b5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="1" id="b6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="2" id="c1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="2" id="c2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="2" id="c3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="2" id="c4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="2" id="c5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="2" id="c6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="3" id="d1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="3" id="d2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="3" id="d3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="3" id="d4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="3" id="d5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="3" id="d6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="4" id="e1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="4" id="e2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="4" id="e3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="4" id="e4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="4" id="e5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="4" id="e6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="5" id="f1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="5" id="f2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="5" id="f3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="5" id="f4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="5" id="f5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="5" id="f6" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="0" data-y="6" id="g1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="6" id="g2" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="2" data-y="6" id="g3" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="3" data-y="6" id="g4" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="4" data-y="6" id="g5" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="5" data-y="6" id="g6" onClick={(e) => this.placePiece(e.target.id)}/>
      </div>
    );
  }
}

export default GameBoard;