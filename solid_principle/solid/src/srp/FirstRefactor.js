import React from "react";
import {useGetRemoteData} from "./useGetRemoteData";

export const SingleResponsibilityPrinciple = () => {

    const {filteredUsers , isLoading} = useGetRemoteData()

    const showDetails = (userId) => {
        const user = filteredUsers.find(user => user.id===userId);
        alert(user.contact)
    }

    return <>
        <div> Users List</div>
        <div> Loading state: {isLoading? 'Loading': 'Success'}</div>
        {filteredUsers.map(user => {
            return <div key={user.id} onClick={() => showDetails(user.id)}>
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        })}
    </>
}