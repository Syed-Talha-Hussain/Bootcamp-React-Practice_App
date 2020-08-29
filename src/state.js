import React, { useState } from 'react'
import { Message } from './Message';
import './App.css';


function State(){
    let [count, setCount] = useState(1);
    let [day, setDay] = useState(false)
    
    return (
        <div className={'box container ${day ? "" : dayLight}'}>
            <h3>Value of State is {count}</h3>    
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <hr/>                 
        
            <button onClick={() => setDay(!day)}>Message</button>
            <Message v1= {day ? 'Morning' : 'Night'}/>
        </div>
    )
}
export default State;
