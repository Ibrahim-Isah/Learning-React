import React from 'react'
import withCounter from './withCounter'


class HoverCounter extends React.Component{
    render(){

        // const { count } = this.state
        const { count , incrementCount } = this.props
        return(
            <h1 onMouseOver={incrementCount}>Hover Over {count} times</h1>
        )
    }
    
}


export default withCounter(HoverCounter , 10)