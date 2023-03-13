import React from "react";

export const BankingDetails= ({bankName , bankAccountNumber}) => {

    return <>
        <div>bankName: {bankName}</div>
        <div>bankAccountNumber: {bankAccountNumber}</div>
    </>
}