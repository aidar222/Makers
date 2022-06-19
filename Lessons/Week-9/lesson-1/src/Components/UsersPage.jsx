import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((data)=>{
                setUsers(data)
            })
    }, []);

    return (
        <div>
            <h1>Users Page</h1>
            {users.map((item)=>(
                <Link key={item.id} to={`/users/${item.id}`} style={{color:'black'}}>
                    <li>{item.name}</li>
                </Link>
            ))}
        </div>
    );
};

export default UsersPage;