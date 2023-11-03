import React, { useState } from "react"

const TURNS = {
	X: "X",
	O: "O",
}



const Square = ({ children, updateBoard, index }) => {
	return (
		<div key={index} className="cell">
			<span className="cell-content">{index}</span>
		</div>
	)
}

function App() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [turn, setTurn] = useState(TURNS.X)

	return (
		<>
			<main className="board">
				<h1>Tic Tac Toe</h1>
				<section className="game">
					{board.map((cell, index) => {
						return (
							<Square
								key={index}
								index={index}
							/>
						)
					})}
				</section>
			</main>
		</>
	)
}

export default App
