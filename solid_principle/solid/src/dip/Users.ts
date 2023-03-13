import React, {ReactFragment, useEffect, useState} from "react";

const REMOTE_URL = 'https://jsonplaceholder.typicode.com/users'

export const Users = () => {
  
    const [users , setUsers] = useState([])

    useEffect(() => {
      
      fetch(REMOTE_URL)
        .then(response => response.json())
        .then(json => setUsers(json))
        
    },[])

    return (<ReactFragment>
        <div> Users List</div>
        {users.map(user => <div>{user.name}</div>)}
    </ReactFragment>)
}