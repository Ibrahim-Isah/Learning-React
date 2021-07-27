import React, { Component } from 'react'


class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message : 'Hello'
        }
        //binding inside the constructor
        //this.changeState = this.changeState.bind(this)
    }

    // changeState(){
    //     this.setState({
    //         message : 'Goodbye'
    //     })
    // } using bind and arrow function inside the tag

        //using the arrow function outside
    changeState = () => {
        this.setState({
            message : 'Goodbye!'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {() => this.changeState()} >Click</button> */}
                {/* <button onClick = {this.changeState.bind(this)} >Click</button> */}
                <button onClick = {this.changeState} >Click</button>


            </div>
        )
    }
}

export default EventBind