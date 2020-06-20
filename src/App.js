import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">

        <Dinner dish="Chicken Biryani" sweetDish="Kheer"/>

        <Dinner dish="Chicken Karahi" sweetDish="Custard"/>
        
        <Dinner dish="Chicken Tikka" sweetDish="Kulfi"/>

    </div>
  );
}

export default App;
