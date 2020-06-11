import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    // State for turn
    // State for piece postitions?
  }

  render() {
    return (
      <div>
        <div>
          <h1>Let's Play Connect Four</h1>
        </div>
        <div id='game-board'>
          <div class="square" row="0" col="0"/>
          <div class="square" row="0" col="1"/>
          <div class="square" row="0" col="2"/>
          <div class="square" row="0" col="3"/>
          <div class="square" row="0" col="4"/>
          <div class="square" row="0" col="5"/>
          <div class="square" row="0" col="6"/>
          <div class="square" row="1" col="0"/>
          <div class="square" row="1" col="1"/>
          <div class="square" row="1" col="2"/>
          <div class="square" row="1" col="3"/>
          <div class="square" row="1" col="4"/>
          <div class="square" row="1" col="5"/>
          <div class="square" row="1" col="6"/>
          <div class="square" row="2" col="0"/>
          <div class="square" row="2" col="1"/>
          <div class="square" row="2" col="2"/>
          <div class="square" row="2" col="3"/>
          <div class="square" row="2" col="4"/>
          <div class="square" row="2" col="5"/>
          <div class="square" row="2" col="6"/>
          <div class="square" row="3" col="0"/>
          <div class="square" row="3" col="1"/>
          <div class="square" row="3" col="2"/>
          <div class="square" row="3" col="3"/>
          <div class="square" row="3" col="4"/>
          <div class="square" row="3" col="5"/>
          <div class="square" row="3" col="6"/>
          <div class="square" row="4" col="0"/>
          <div class="square" row="4" col="1"/>
          <div class="square" row="4" col="2"/>
          <div class="square" row="4" col="3"/>
          <div class="square" row="4" col="4"/>
          <div class="square" row="4" col="5"/>
          <div class="square" row="4" col="6"/>
          <div class="square" row="5" col="0"/>
          <div class="square" row="5" col="1"/>
          <div class="square" row="5" col="2"/>
          <div class="square" row="5" col="3"/>
          <div class="square" row="5" col="4"/>
          <div class="square" row="5" col="5"/>
          <div class="square" row="5" col="6"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));