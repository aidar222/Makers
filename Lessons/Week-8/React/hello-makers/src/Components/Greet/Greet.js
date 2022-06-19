import React from 'react';
import './Greet.css'

const Greet = (props) => {
    // props.getData('hello')
    return (
      <input 
      onChange={(e)=>{
          props.getData(e.target.value)
      }}
       type='text'/>
    );
};

export default Greet;