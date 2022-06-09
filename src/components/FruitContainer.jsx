import React, {Component, startTransition} from "react"
import Input from "./Input"
import List from "./List"

const starterFruits = [
    "Mango",
    "Apple",
    "Pineapple",
    "Watermelon"
]

export default class FruitContainer extends Component {

    // state will live here in the parent component
    state ={
        // original fruit List (that never gets filtered, unless things get pushed or popped)
        originalFruitList:starterFruits,        
        // data to display in the list (Matching)
        fruitsToDisplay: starterFruits,
        // data to display in the list (not Matching)
        fruitsNotMatching: [],
        // data input to use to filter fruits
        filterValue: ""
    }
    
    // event handlers will live here that manipulate state
    handleFilterChange = e => {
        //user typed in:
        const filterValue = e.target.value

        //loop over the fruits to display and include them if they match what the user typed in
        const filteredFruitList = this.state.originalFruitList.filter((fruit)=>{
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })

        const notMatchingFruitList = this.state.originalFruitList.filter((fruit)=>{
            return !fruit.toLowerCase().includes(filterValue.toLowerCase())
        })

        this.setState({
            filterValue,
            fruitsToDisplay:filteredFruitList,
            fruitsNotMatching: notMatchingFruitList
        })

    }
    
    render(){
        return (
            <>
                <h1>Fruit Filter</h1>
                {/* pass event handlers to the input */}
                <Input 
                    handleFilterChange = {this.handleFilterChange}
                    value = {this.state.filterValue}
                />

                {/* pass the data from state to the list */}
                <List
                    fruits={this.state.fruitsToDisplay}
                    badFruits = {this.state.fruitsNotMatching}
                />
            </>
        )
    }
}