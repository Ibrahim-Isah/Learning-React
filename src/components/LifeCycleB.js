import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props){
        super(props);
          
        this.state = {
            name : "Isah"
        }
        console.log("constructorB")
    }

    static getDerivedStateFromProps(props , state){
        setTimeout(console.log("getDerivedStateFromPropsB"), 10000);
        return null
    }

    componentDidMount(){
        console.log("ComponentB did Mount")
    }

    shouldComponentUpdate(){
        console.log("should component B update")
        return true 
    }

    getSnapshotBeforeUpdate(prevProps , prevState ){
        console.log("SnapShot of B")
        return null
    }

    componentDidUpdate(){
        console.log("yes update B")
    }

    changeState = () => {
        this.setState({
            name : 'Abba'
        })
    }

    render(){
        return (
            <div>
                LifeCycleB 
                <button onClick = {this.changeState}>Click me</button>
                {console.log("renderB")}
            </div>
        );
    }
}


export default LifecycleB
