import React from 'react'

export const Greet = props => {
    const {name , heroName} = props
    return(
        <div>
            <h1>My name is {name} a.k.a {heroName} </h1>
            
        </div>
    )
    
}

