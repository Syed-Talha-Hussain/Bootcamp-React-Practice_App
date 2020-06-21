
import React from 'react';

function Message(props){
    return(
        <div>
            <button onClick={()=>
               <h1>{props.msg}</h1>
            }>
                Message
            </button>
        </div>
    );
}

export default Message;