import React from "react";

export default class ShoppingList extends React.Component {
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
