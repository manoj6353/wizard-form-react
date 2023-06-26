import React, { useState } from "react";
import App from "./App";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([
    {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      contact: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      slotdate: "",
      slottime: "",
      bankname: "",
      carddetails: "",
      terms: "false",
    },
  ]);

  const [userError, setUserError] = useState({
    firsterror: "",
    lasterror: "",
    ageerror: "",
    emailerror: "",
    contacterror: "",
    gendererror: "",
    addresserror: "",
    cityerror: "",
    stateerrro: "",
    pincodeerror: "",
    slotdateerror: "",
    slottimeerror: "",
    banknameerror: "",
    carddetailserror: "",
    termserror: "",
  });

  const [documents, setDocuments] = useState([
    { documenttype: "", attachments: "" },
  ]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, userData]);
  }

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          documents,
          setDocuments,
          userError,
          setUserError,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
