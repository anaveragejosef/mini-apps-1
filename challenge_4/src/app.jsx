import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './GameBoard.jsx';

var App = (props) => {
  return (
    <div>
      <div>
        <h1>Let's Play Connect Four</h1>
      </div>
      <div>
        <GameBoard />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));