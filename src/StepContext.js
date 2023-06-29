import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(5);
  const [userData, setUserData] = useState({
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
  });

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
      id: "1",
      documenttype: "",
      attachments: "",
      attachmentsize: "",
    },
  ]);

  const submitData = () => {
    alert("success");
    const Data = { ...userData, documents };
    const getData = JSON.parse(localStorage.getItem("data") || "[]");
    let ids = getData.length + 1;
    // Data.id = ids;
    getData.push(Data);
    localStorage.setItem("data", JSON.stringify(getData));
  };

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
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
