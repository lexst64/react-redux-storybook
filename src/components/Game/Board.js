import React from 'react'
import Square from "./Square";

export default class Board extends React.Component {
    checkForHighlighted(index) {
        return this.props.highlights.includes(index)
    }

    renderSquare(number) {
        return (
            <Square
                value={this.props.squares[number]}
                isHighlighted={this.checkForHighlighted(number)}
                onClick={() => this.props.onClick(number)}
                key={number}
            />
        )
    }

    /**
     * @param {Number} rowCount (3 by default) the number of rows with squares
     * @param {Number} squareCount (3 by default) the number of squares in the each row
     * */
    renderBoardRows(rowCount = 3, squareCount = 3) {
        let squareNumber = 0
        const squares = Array(squareCount).fill(null)
        return Array(rowCount)
            .fill(null)
            .map((val, index) => (
                <div className="board-row" key={index}>
                    {squares.map(() => this.renderSquare(squareNumber++))}
                </div>
            ))
    }

    render() {
        return (
            <div>{this.renderBoardRows()}</div>
        )
    }
}
