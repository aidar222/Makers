import React, { useEffect, useInsertionEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                setUser(data)
            })
    }, []);

    return (
        <div>
            {/* <h1>User Details</h1>
            {user ? (
                <>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h3>{user.phone}</h3>
                </>
            ):(<h2>Не найдено</h2>)} */}
            {user && (
                <>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h3>{user.phone}</h3>
                </>
            )}
        </div>
    );
};

export default UserDetails;