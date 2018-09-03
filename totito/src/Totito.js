import React, { Component } from 'react';
import ReactDOM from "react-dom";  
import Popup from "reactjs-popup"; 
import './Totito.css'; 

class Totito extends Component{
	constructor(){
		super() 
		this.state = {
			board : Array(9).fill(null),
			activePlayer: "x",
			player1: 0,
			player2: 0,
			playerO: "player", 
			playerX: "player", 
			side: 0, 
			turn: 0
		}
	}

	pickWinner(){
		let tiebreaker = 0;
		let possibleVictories = [
		["0","1","2"],
		["3","4","5"],
		["6","7","8"],
		["0","3","6"],
		["1","4","7"],
		["2","5","8"],
		["0","4","8"],
		["6","4","2"]
		]

		for (var i = 0; i < possibleVictories.length; i++) {
			const[a, b, c] = possibleVictories[i];
			if(this.state.board[a] &&this.state.board[a] === this.state.board[b] && this.state.board[b] === this.state.board[c]){
				tiebreaker = 1;
				let winner = this.state.board[a] === "o" ? this.state.playerO : this.state.	playerX
				alert("Victory: " + winner)

				//Variables para la suma de puntos de todos los juegos que se llevan acumulados
				let p1 = 0
				let p2 = 0 
				winner === "player1" ? p1 = 1: p2 = 1
				
				let newBoard = Array(9).fill(null); 
				let turn = this.state.turn === "0" ? "1": "0"
				this.setState({
					board: newBoard, 
					turn, 
					side: turn, 
					player1: this.state.player1 + p1, 
					player2: this.state.player2 + p2
				});
				return
			}

			
			}
		if(tiebreaker === 0 && !this.state.board.includes(null)){
				alert("Tie")
				let newBoard = Array(9).fill(null); 
				let side = this.state.turn == "0" ? "0" : "1"
				this.setState({
					board: newBoard, 
					side, 
			});
			 
		}
	}

	
	moveInGame(index){
		if(this.state.board[index] === null){
			let newActivePlayer = this.state.activePlayer === "x" ? "o": "x"
			let newBoard = this.state.board
			newBoard[index] = newActivePlayer
			this.setState({
				board: newBoard,
				activePlayer: newActivePlayer
			})
		}

		this.pickWinner()
	}

	startAGame(){
		console.log("Test")
		let announcer = this.state.turn === 0 ? "Player 1" : "Player 2"
		//pop-up de la figura que desea ser: 
		//con esa informacion settear side 
		// con side definir active Player inicial :D, ademas de definir que playerO sera P1 o P2 y el otro, el otro

		console.log(announcer + " Comienza!") //Hacerlo Pop Up


	}	
	render(){
		{this.startAGame()}
		const space = this.state.board.map((space, index) => <div className = "square" key = {index} onClick={(e) =>this.moveInGame(index)}>{space}</div>)

		return (
		<div className = "container">
			<div className = "board">
				{space}
			</div>
		</div>
		);
	}
}

export default Totito; 