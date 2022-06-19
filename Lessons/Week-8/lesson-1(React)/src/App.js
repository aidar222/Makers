import React from 'react';
import Example from './Components/Example';

const App = () => {
  function getInfo(props){
    console.log(props);
  };
  return (
    <div>
      <Example name='React' company='meta' getInfo={getInfo}>
        <button>Включить</button>
      </Example> 

      <Example name='Library' company='facebook'/>
      <Example name='Framework' company='spaceX'/>
    </div>
  );
};

export default App;