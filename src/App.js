import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner.js';
import Message from './message.js'

function App() {

  let [count, setcount] = useState(1);
  let [isDay, setDay] = useState(false)

  return (
    <div className ='box'>

        <h1>It is {isDay ? 'Day' : 'Night'}</h1>

        <Dinner dish="Chicken Biryani" sweetDish="Kheer"/>

        <Dinner dish="Chicken Karahi" sweetDish="Custard"/>
        
        <Dinner dish="Chicken Tikka" sweetDish="Kulfi"/>
        
      <h3>Value of Counter Variable: {count}</h3>
      
      <button onClick={()=>
      setcount(++count)
      }>
      Update Counter
      </button>

      <Message msg="Hi! I am Talha"/> 

      <button onClick={()=>setDay(!isDay)}>
        Change
      </button>

    </div>
  );
}

export default App;
