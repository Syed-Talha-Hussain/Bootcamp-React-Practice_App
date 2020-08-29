import React from 'react'

function Dinner(props) {
    return (
        <div>
            <h2>Today we are serving {props.dishName} Karahi</h2>
            <h2>Today we are also serving {props.sweetName} Kulfi</h2>
            
        </div>
    )
}
export default Dinner;
