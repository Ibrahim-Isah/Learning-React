import React, { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'Welcome to my club'
        }
    }

    changeMessage(){
        this.setState({
            message: 'hello damn them'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick = {() => this.changeMessage()}>Click me</button>
            </div>
            )
    }
}

export default Message