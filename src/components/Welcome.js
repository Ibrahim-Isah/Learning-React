import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>Class Components {this.props.name} damn {this.props.heroName} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome