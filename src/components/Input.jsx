import React, {Component} from "react"

export default class Input extends Component {
    render(){
        return (
            <>
            <div>
                <label htmlFor="fruitInput">Filter the Fruits: </label>
                <input
                type="text"
                id="fruitInput"
                value={this.props.value}
                onChange={this.props.handleFilterChange}
                />
            </div>
            </>
        )
    }
}