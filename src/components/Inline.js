import React from 'react'
// import styles from '../appStyles.module.css'


function Inline() {

    const heading = {
        fontSize : "72px", 
        color : 'blue'
    }
    return (
        <div>
            <h1 style = {heading}>Inline</h1>
            {/* <h1 className = {styles.success}>Success</h1> */}
        </div>
    )
}

export default Inline
