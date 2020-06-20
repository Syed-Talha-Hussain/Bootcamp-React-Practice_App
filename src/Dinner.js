
import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>We are serving {props.dish} and {props.sweetDish}</h1>
            <hr/>
        </div>
    )
}
export default Dinner;