import React from "react";
import {PersonalDetails} from './PersonalDetails'
import {BankingDetails} from './BankingDetails'

const user = {
  name : "Some user",
  age : "60",
  adderess : "House Address",
  bankName : "Some Bank", 
  bankAccountNumber: "1234567890"
}

export const User= () => {
    return <>
        <PersonalDetails user={user} />
        <BankingDetails user={user} />
    </>
}