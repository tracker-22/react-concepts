import React from "react";

const user ={
  name: "Some Name",
  age: "60",
  address: "Some address",
  bankName: "Bank Name",
  bankAccountNumber: "1234567809"
}

export const User= () => {

    return <>
        <PersonalDetails name={user.name} age={user.age} address={user.address} />
        <BankingDetails bankName={user.bankName} bankAccountNumber={user.bankAccountNumber} />
    </>
}