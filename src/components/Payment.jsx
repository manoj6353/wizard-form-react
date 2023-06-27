import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Payment = () => {
  const {
    setStep,
    userData,
    setUserData,
    submitData,
    userError,
    setUserError,
  } = useContext(multiStepContext);

  const [isErrorActive, setIsErrorActive] = useState(false);
  const [errorTrue, setErrorTrue] = useState("");

  const setValue = (e) => {
    const list = [...userData];
    setUserData(
      list.map((item) => {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      })
    );
    setErrorTrue(e);
  };

  useEffect(() => {
    isErrorActive && handleChange();
  }, [errorTrue]);

  const handleChange = () => {
    if (userData[0].bankname.length === 0) {
      setUserError((errors) => ({
        ...errors,
        banknameerror: "Bank must be required",
      }));
    } else if (!userData[0].bankname.match(/^[a-zA-Z ]{2,30}$/gm)) {
      setUserError((errors) => ({
        ...errors,
        banknameerror: "Enter proper Bank name",
      }));
    } else {
      setUserError((errors) => ({ ...errors, banknameerror: "" }));
    }
    if (userData[0].carddetails.length === 0) {
      setUserError((errors) => ({
        ...errors,
        carddetailserror: "Card details must be required",
      }));
    } else if (
      !userData[0].carddetails.match(
        /^\(?([0-9]{4})\)?([0-9]{4})([0-9]{4})([0-9]{4})$/
      )
    ) {
      setUserError((errors) => ({
        ...errors,
        carddetailserror: "Enter proper Card details",
      }));
    } else {
      setUserError((errors) => ({ ...errors, carddetailserror: "" }));
    }
    if (userData[0].terms === "false") {
      setUserError((errors) => ({
        ...errors,
        termserror: "Terms & condition must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, termserror: "" }));
    }
  };

  const checkValid = () => {
    if (
      userError["carddetailserror"] === "" &&
      userError["banknameerror"] === "" &&
      userError["termserror"] === "" &&
      isErrorActive
    ) {
      submitData();
    } else {
      return false;
    }
  };

  return (
    <>
      <section className="bg-image mt-5">
        <div className="d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="text-center mb-2">Register Your self</h2>
                    <form>
                      <hr />
                      <div className="tab">
                        <legend>Licanse Payment</legend>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="bankname">
                            Bank Name
                          </label>
                          <input
                            type="text"
                            name="bankname"
                            id="bankname"
                            value={userData[0].bankname}
                            onChange={setValue}
                            placeholder="Enter a Bank Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="banknameerror" style={{ color: "Red" }}>
                            {userError["banknameerror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="carddetails">
                            Card Details
                          </label>
                          <input
                            type="number"
                            name="carddetails"
                            id="carddetails"
                            value={userData[0].carddetails}
                            onChange={setValue}
                            placeholder="Enter a Card Details"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="carddetailserror" style={{ color: "Red" }}>
                            {userError["carddetailserror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={userData[0].terms === "true"}
                            onChange={setValue}
                            value="true"
                          ></input>
                          <label className="form-label" htmlFor="terms">
                            Terms & Conditions
                          </label>
                          <span id="termserror" style={{ color: "Red" }}>
                            {userError["termserror"]}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p
                          className="btn btn-success"
                          onClick={() => setStep(4)}
                        >
                          Prev
                        </p>
                        &emsp;
                        <p
                          className="btn btn-success"
                          onClick={() => {
                            setIsErrorActive(true);
                            handleChange();
                            checkValid();
                          }}
                        >
                          Submit
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
