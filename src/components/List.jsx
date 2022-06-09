import React, {Component} from "react"

export default class List extends Component {
    render(){
        const fruitItems = this.props.fruits.map((fruit,i)=>{
            return <li key={`fruitItem${i}`}>{fruit}</li>
        })

        const badfruitItems = this.props.badFruits.map((fruit,i)=>{
            return <li key={`fruitItem${i}`}>{fruit}</li>
        })


        return (
            <>
            <div>
                <p>Fruits Included: </p>
                <ul>
                    {/* fruits will go here */}
                    {fruitItems}
                </ul>

                <p>Fruits NOT Included:</p>
                <ul>
                    {badfruitItems}
                </ul>
            </div>
            </>
        )
    }
}