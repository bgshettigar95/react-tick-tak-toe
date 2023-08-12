import React, { useState } from 'react'
import Board from './Board'

const Game = () => {
    const [isNextX, setIsNextX] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);

    const onPlay = (newSquares) => {
        setHistory([...history.slice(0, currentMove + 1), newSquares]);
        setCurrentMove(currentMove + 1);
        setIsNextX(!isNextX);
    }

    const jumpTo = (move) => {
        setCurrentMove(move);
    }

    let currentSquares = Array(9).fill(null);
    if (currentMove > 0) {
        currentSquares = history[currentMove];
    }

    const moves = history.map((move, i) => {
        if (i === 0) {
            return <li><button onClick={() => jumpTo(i)}>Go to game start</button></li>
        } else {
            return <li><button onClick={() => jumpTo(i)}>Go to move {i}</button></li>
        }
    });

    return (
        <div className="game">
            <Board squares={currentSquares} isNextX={isNextX} onPlay={onPlay} />
            <div className='game-info'>
                <ul className='game-moves'>
                    {moves}
                </ul>

            </div>
        </div>
    )
}

export default Game