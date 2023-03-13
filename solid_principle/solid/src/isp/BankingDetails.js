import React from "react";

export const BankingDetails= ({user}) => {

    return <>
        <div>name: {user.bankName}</div>
        <div>name: {user.bankAccountNumber}</div>
    </>
}