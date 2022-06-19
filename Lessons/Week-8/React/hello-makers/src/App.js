import logo from './logo.svg';
import './App.css';

import React from 'react';
import Greet from './Components/Greet/Greet';

const App = () => {
  const getData = (value) =>{
    console.log(value);
  }
  return (
    <div>
      <Greet getData={getData}/>
    </div>
  );
};

export default App;