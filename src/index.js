import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { calculateWinner } from './utils'

// the Square components are now controlled components.
// The Board has full control over them
// -
// Besides, Square is a function component
// and it doesn't have its own store
const Square = (props) => {
    return (
        <button
            className="square"
            // event listener on button ''
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    nextPlayer() {
        return this.state.xIsNext ? 'X' : 'O'
    }

    isFinished(number) {
        const squares = this.state.squares
        if (calculateWinner(squares) || squares[number]) {
            return true
        }
        return false
    }

    handleClick(number) {
        // copy is made
        const squares = this.state.squares.slice()

        if (this.isFinished(number)) {
            return
        }

        squares[number] = this.nextPlayer()
        // React automatically updates the child components
        // inside of parent component when state is updated
        // in parent one
        this.setState({
            ...this.state,
            squares,
            xIsNext: !this.state.xIsNext
        })
    }

    renderSquare(number) {
        return (
            <Square
                num={number}
                value={this.state.squares[number]}
                onClick={() => this.handleClick(number)}
            />
        )
    }

    render() {
        let status
        const winner = calculateWinner(this.state.squares)
        if (winner) {
            status = `winner is ${winner}`
        } else {
            status = `Next player: ${this.nextPlayer()}`
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                    <ShoppingList name="ddA" />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>SMT {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        )
    }
    // return React.createElement('div', {className: 'shopping-list'},
    //     React.createElement('h1', null, 'SMT ', this.props.name),
    //     React.createElement('ul', null,
    //         React.createElement('li', null, 'Instagram'),
    //         React.createElement('li', null, 'Instagram'),
    //         React.createElement('li', null, 'Instagram')
    //     )
    // )
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
