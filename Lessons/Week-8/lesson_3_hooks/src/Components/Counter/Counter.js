import React, { useState } from 'react';

const Counter = () => {
    function getInitState(){
        // console.log('***************');
        return new Date().getDate();
    }
    const [counter, setCounter] = useState(()=>getInitState());
    const[person, setPerson] = useState({
        name:'JS20', 
        lastName: 'JavaLovery'
    });

    // console.log(counter);

    function decrement(){
        setCounter((prev)=> prev - 1)
        setCounter((prev)=> prev - 1)
    };
    function increment(){
        setCounter(counter + 1)
    };

    function changePerson(){
        setPerson((prev)=>{
            return{
                ...prev,
                name:'Python20'
            };
        });
    };

    return <div>
        <h1>{counter}</h1>
        <button onClick={decrement} className='btn btn-success'>-</button>
        <button onClick={increment} className='btn btn-danger'>+</button>
        <button onClick={changePerson} className='btn btn-warning'>Изменить название</button>

        <p>{JSON.stringify(person)}</p>
    </div>;
};

export default Counter;