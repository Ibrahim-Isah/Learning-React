import React, { Component } from 'react'

// class FRInput extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

const FRInput = React.forwardRef((props , ref) => {
    return(
        <input type="text" ref={ref}/> 
    )
})

export default FRInput
