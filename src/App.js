import React from 'react';
import './App.css';
import Dinner from './Dinner';
import State from './state';

function App() {
  return (
    <div className="container">
      {/* <h1>Hello World</h1> */}

      <Dinner dishName="Mutton" sweetName="Vanilla"/>
      <hr />
      <Dinner dishName="Beef" sweetName="Choclate"/>
      <hr />
      <Dinner dishName="Chicken" sweetName="Crunch"/>
      <hr />
      <State />
      

    </div>
  );
}

export default App;
