import React, { useContext, useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { TodoContext } from '../../Context/TodoContext';

const AddTodo = () => {
    const [inpValue, setInpValue] = useState('');
    const {addTask} = useContext(TodoContext)

    function handleClick(){
        let newObj ={
            task: inpValue,
            status: false,
        };
        addTask(newObj);
        setInpValue('')
    }
    return (
        <div className='d-flex m-3'>
            <FormControl 
            type='text' 
            placeholder='add todo'
            className='w-25'
            value={inpValue}
            onChange={(e)=>setInpValue(e.target.value)}
            />
            <Button variant='warning' onClick={handleClick}>Add</Button>
        </div>
    );
};

export default AddTodo;