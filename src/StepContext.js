import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
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
    const data = { ...userData, documents };
    let getData = JSON.parse(localStorage.getItem("save-data") || "[]");
    console.log(data.index !== undefined && data.index !== "");
    if (data.index !== "" && data.index !== undefined) {
      const index = data.index;
      getData[index] = data;
      localStorage.setItem("save-data", JSON.stringify(getData));
    } else {
      data.id = Math.floor(Math.random() * 99999);
      getData.push(data);
      localStorage.setItem("save-data", JSON.stringify(getData));
    }
    window.location.reload();
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
