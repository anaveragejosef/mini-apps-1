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
      currentPlayer: 1
    }
    this.placePiece = this.placePiece.bind(this);
  }

  placePiece(id) {
    let col;
    id = id.split('');
    if (id[0] === 'a') {
      col = 0;
    }
    // Create var for board column
    var boardCol = this.state.board[col];
    // for loop through board at [id] - iterate backwards
    for(let i = boardCol.length - 1; i > -1; i--) {
      // If it is 0, place turn
      if (boardCol[i] === 0) {
        this.setState({

        })
      }
      // Once turn placed
      // Update current player
    }
  }

  render () {
    return (
      <div id='game-board' class='game-board'>
        <div class="square" data-x="0" data-y="0" id="a1" onClick={(e) => this.placePiece(e.target.id)}/>
        <div class="square" data-x="1" data-y="0"/>
        <div class="square" data-x="2" data-y="0"/>
        <div class="square" data-x="3" data-y="0"/>
        <div class="square" data-x="4" data-y="0"/>
        <div class="square" data-x="5" data-y="0"/>
        <div class="square" data-x="0" data-y="1"/>
        <div class="square" data-x="1" data-y="1"/>
        <div class="square" data-x="2" data-y="1"/>
        <div class="square" data-x="3" data-y="1"/>
        <div class="square" data-x="4" data-y="1"/>
        <div class="square" data-x="5" data-y="1"/>
        <div class="square" data-x="0" data-y="2"/>
        <div class="square" data-x="1" data-y="2"/>
        <div class="square" data-x="2" data-y="2"/>
        <div class="square" data-x="3" data-y="2"/>
        <div class="square" data-x="4" data-y="2"/>
        <div class="square" data-x="5" data-y="2"/>
        <div class="square" data-x="0" data-y="3"/>
        <div class="square" data-x="1" data-y="3"/>
        <div class="square" data-x="2" data-y="3"/>
        <div class="square" data-x="3" data-y="3"/>
        <div class="square" data-x="4" data-y="3"/>
        <div class="square" data-x="5" data-y="3"/>
        <div class="square" data-x="0" data-y="4"/>
        <div class="square" data-x="1" data-y="4"/>
        <div class="square" data-x="2" data-y="4"/>
        <div class="square" data-x="3" data-y="4"/>
        <div class="square" data-x="4" data-y="4"/>
        <div class="square" data-x="5" data-y="4"/>
        <div class="square" data-x="0" data-y="5"/>
        <div class="square" data-x="1" data-y="5"/>
        <div class="square" data-x="2" data-y="5"/>
        <div class="square" data-x="3" data-y="5"/>
        <div class="square" data-x="4" data-y="5"/>
        <div class="square" data-x="5" data-y="5"/>
        <div class="square" data-x="0" data-y="6"/>
        <div class="square" data-x="1" data-y="6"/>
        <div class="square" data-x="2" data-y="6"/>
        <div class="square" data-x="3" data-y="6"/>
        <div class="square" data-x="4" data-y="6"/>
        <div class="square" data-x="5" data-y="6"/>
      </div>
    );
  }
}

export default GameBoard;