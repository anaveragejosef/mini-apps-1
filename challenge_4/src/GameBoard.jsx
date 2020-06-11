import React from 'react';
import ReactDOM from 'react-dom';

var GameBoard = (props) => {
  return (
    <div id='game-board' class='game-board'>
      <div class="square" data-x="0" col="0" id="r0c0" onClick={props.onClick}/>
      <div class="square" row="1" col="0"/>
      <div class="square" row="2" col="0"/>
      <div class="square" row="3" col="0"/>
      <div class="square" row="4" col="0"/>
      <div class="square" row="5" col="0"/>
      <div class="square" row="0" col="1"/>
      <div class="square" row="1" col="1"/>
      <div class="square" row="2" col="1"/>
      <div class="square" row="3" col="1"/>
      <div class="square" row="4" col="1"/>
      <div class="square" row="5" col="1"/>
      <div class="square" row="0" col="2"/>
      <div class="square" row="1" col="2"/>
      <div class="square" row="2" col="2"/>
      <div class="square" row="3" col="2"/>
      <div class="square" row="4" col="2"/>
      <div class="square" row="5" col="2"/>
      <div class="square" row="0" col="3"/>
      <div class="square" row="1" col="3"/>
      <div class="square" row="2" col="3"/>
      <div class="square" row="3" col="3"/>
      <div class="square" row="4" col="3"/>
      <div class="square" row="5" col="3"/>
      <div class="square" row="0" col="4"/>
      <div class="square" row="1" col="4"/>
      <div class="square" row="2" col="4"/>
      <div class="square" row="3" col="4"/>
      <div class="square" row="4" col="4"/>
      <div class="square" row="5" col="4"/>
      <div class="square" row="0" col="5"/>
      <div class="square" row="1" col="5"/>
      <div class="square" row="2" col="5"/>
      <div class="square" row="3" col="5"/>
      <div class="square" row="4" col="5"/>
      <div class="square" row="5" col="5"/>
      <div class="square" row="0" col="6"/>
      <div class="square" row="1" col="6"/>
      <div class="square" row="2" col="6"/>
      <div class="square" row="3" col="6"/>
      <div class="square" row="4" col="6"/>
      <div class="square" row="5" col="6"/>
    </div>
  );
}

export default GameBoard;