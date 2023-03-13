import {useEffect, useReducer, useState} from "react";

const initialState = {
    isLoading: true
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {isLoading: true};
        case 'FINISHED':
            return {isLoading: false};
        default:
            return state;
    }
}

export const useGetRemoteData = (url) => {

    const [users , setUsers] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState);

    const [filteredUsers , setFilteredUsers] = useState([])


    useEffect(() => {
        dispatch({type:'LOADING'})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({type:'FINISHED'})
                setUsers(json)
            })
    },[])

    useEffect(() => {
        const filteredUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                contact: `${user.phone} , ${user.email}`
            };
        });
        setFilteredUsers(filteredUsers)
    },[users])

    return {filteredUsers , isLoading: state.isLoading}
}