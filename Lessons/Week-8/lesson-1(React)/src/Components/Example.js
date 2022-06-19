import React from 'react';
import './Example.css'

const Example = ({name, company, children, getInfo}) => {
    // console.log(props.name);
    return (
        <div>
            <img 
            width={300}
            className='react-icon' 
            src='https://pbs.twimg.com/media/Ej6h8dUWsAAFdpn.jpg'
            />
            <h3>{name}</h3>
            <h4>{company}</h4>
            {children}
            <input onChange={(event)=>{getInfo(event.target.value)}}/>
        </div>
    );
};

export default Example;