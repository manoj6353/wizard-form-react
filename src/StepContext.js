import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const [documentsError, setDocumentsError] = useState([
    { documenttypeerror: "", attachmentserror: "", attachmentsizeerror: "" },
  ]);
  const [documents, setDocuments] = useState([
    {
      documenttype: "",
      attachments: "",
      attachmentsize: "",
    },
  ]);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
    alert("success");
    setFinalData((finalData) => [...finalData, { userData, documents }]);
    console.log(finalData);
    localStorage.setItem("data", JSON.stringify(finalData));
    setStep(1);
  };

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
          documentsError,
          setDocumentsError,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
