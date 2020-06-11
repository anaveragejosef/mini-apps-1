import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // State for turn
    // State for piece postitions?
    this.placePiece = this.placePiece.bind(this);
  }

  placePiece(event) {
    console.log(event.dataset);
    console.log(event);
    var board = document.getElementsByClassName('square');
    console.log(board);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Let's Play Connect Four</h1>
        </div>
        <div>
          <GameBoard onClick={this.placePiece}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));