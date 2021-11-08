// the Square components are now controlled components.
// The Board has full control over them
// -
// Besides, Square is a function component
// and it doesn't have its own store
const Square = (props) => {
    const classes = ['square']
    if (props.isHighlighted) {
        classes.push('highlighted')
    }

    return (
        <button
            className={classes.join(' ')}
            // event listener on button ''
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default Square
