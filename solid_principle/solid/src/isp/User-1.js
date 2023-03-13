import React from "react";

const user ={
  
  personalDetails : {
    name: "Some Name",
    age: "60",
    address: "Some address"
  },
  
  bankingDetails : {
    bankName: "Bank Name",
    bankAccountNumber: "1234567809"
  }
}

export const User= () => {

    return <>
        <PersonalDetails user={user.personalDetails} />
        <BankingDetails user={user.bankingDetails} />
    </>
}