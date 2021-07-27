import React from 'react'

function Apply(){
    // return(
    //     <div>
    //        <h1>Hello Dude</h1>
    //     </div>
    //  )

   return (React.createElement("div" , {id: "divTag"} , React.createElement("h1" , {className:"header"}, "Hello dan iya")))
}

export default Apply