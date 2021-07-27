import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {
    constructor(props){
        super(props);
          
        this.state = {
            name : "Isah"
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props , state){
        setTimeout(console.log("getDerivedStateFromProps"), 10000);
        return null
    }

    componentDidMount(){
        console.log("Component did Mount")
    }

    shouldComponentUpdate(){
        console.log("should component A update")
        return true 
    }

    getSnapshotBeforeUpdate(prevProps , prevState ){
        console.log("SnapShot of A")
        return null
    }

    componentDidUpdate(){
        console.log("yes update A")
    }

    render(){
        return (
            <div>
                LifeCycleA 
                <LifecycleB />
                {console.log("render")}
            </div>
        );
    }
}


export default LifecycleA