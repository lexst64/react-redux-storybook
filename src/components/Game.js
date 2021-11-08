import {calculateWinner} from "../utils";
import React from "react";
import Board from "./Board";
import ShoppingList from "./ShoppingList";

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xIsNext: true,
            history: [{
                squares: Array(9).fill(null),
            }],
            currentStep: 0,
        }
    }

    /**
     * @param {Array} historySliceArgs if it's passed (not null or undefined),
     * this.state.history.slice(...historySlice) is used
     * @param {Number} currentIndex current step's index (-1 by default)
     * @return {Object} object with copied history, current and copied squares in it
     * */
    getStepInfo(historySliceArgs, currentIndex = -1) {
        const history = historySliceArgs
            ? this.state.history.slice(...historySliceArgs)
            : this.state.history.slice()
        const current = history.at(currentIndex)
        const squares = current.squares.slice()
        return {history, current, squares}
    }

    isFinishedOrPrevented(number) {
        const { squares } = this.getStepInfo()
        if (calculateWinner(squares) || squares[number]) {
            return true
        }
        return false
    }

    handleClick(number) {
        if (this.isFinishedOrPrevented(number)) {
            return
        }

        const {history, squares} = this.getStepInfo([0, this.state.currentStep + 1])

        squares[number] = this.getNextPlayer()

        // React automatically updates the child components
        // inside of parent component when state is updated
        // in parent one
        this.setState({
            history: [...this.state.history, { squares }],
            xIsNext: !this.state.xIsNext,
            currentStep: history.length
        })
    }

    getNextPlayer() {
        return this.state.xIsNext ? 'X' : 'O'
    }

    getMoves() {
        return this.state.history.map((value, index) => {
            const description = index
                ? `Go to move #${index}`
                : 'Go to game start'
            return (
                // react requires passing unique key into elements of
                // dynamic list. Key doesn't have to be unique at all,
                // but it must be unique between components and their siblings
                // we can't access this.props.key in components.
                // Passing array index is a bad idea, but it's safe here
                <li key={index}>
                    <button
                        onClick={() => this.jumpTo(index)}
                    >{description}</button>
                </li>
            )
        })
    }

    render() {
        const {current, squares} = this.getStepInfo(null, this.state.currentStep)
        const winner = calculateWinner(squares)
        let status

        const moves = this.getMoves()
        const indexesForHighlighting = []

        if (winner) {
            status = `winner is ${winner.name}`

            current.squares.forEach((square, index) => {
                if (square && winner.indexes.includes(index)) {
                    indexesForHighlighting.push(index)
                }
            })
        } else {
            status = `Next player: ${this.getNextPlayer()}`
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        highlights={indexesForHighlighting}
                        onClick={(number) => this.handleClick(number)}
                    />
                    <ShoppingList name="ddA"/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }

    jumpTo(moveIndex) {
        // there is no needing to ...this.state in {}
        // because React automatically changed and merged prev
        // and new state
        this.setState({
            currentStep: moveIndex,
            // first step and each even one is a X, each odd one is O
            xIsNext: (moveIndex % 2) === 0,
        })
    }
}
