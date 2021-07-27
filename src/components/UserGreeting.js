import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome to our Page Isah</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        return this.state.isLoggedIn && <div>Welcome Hydra</div>
        
        //return <div>{ this.state.isLoggedIn ? <div>Welcome Isah</div> : <div>Welcome Guest</div> }</div>
        
        // if(this.state.isLoggedIn){
        //     return <div>Hello Isah</div>
        // } else {
        //     return <div>Hello Guest</div>
        // }
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
