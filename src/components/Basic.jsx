import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Basic = () => {
  const { setStep, userData, setUserData, userError, setUserError } =
    useContext(multiStepContext);
  const [isErrorActive, setIsErrorActive] = useState(false);
  const [errorTrue, setErrortrue] = useState("");
  const setValue = (e) => {
    const list = [...userData];
    const value = e.target.value;
    setUserData(
      list.map((item) => {
        return {
          ...item,
          [e.target.name]: value,
        };
      })
    );
    setErrortrue(e);
  };

  useEffect(() => {
    isErrorActive && handleChange();
  }, [errorTrue]);

  const handleChange = () => {
    if (userData["firstName"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        firsterror: "First Name must be required",
      }));
    } else if (!userData["firstName"].match(/^[a-zA-Z ]{2,30}$/gm)) {
      setUserError((errors) => ({
        ...errors,
        firsterror: "Enter proper first name",
      }));
    } else {
      setUserError((errors) => ({ ...errors, firsterror: "" }));
    }
    if (userData["lastName"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        lasterror: "Last Name must be required",
      }));
    } else if (!userData["lastName"].match(/^[a-zA-Z ]{2,30}$/gm)) {
      setUserError((errors) => ({
        ...errors,
        lasterror: "Enter proper Last name",
      }));
    } else {
      setUserError((errors) => ({ ...errors, lasterror: "" }));
    }
    if (userData["age"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        ageerror: "Age must be required",
      }));
    } else if (!userData["age"].match(/^(1[89]|[2-5]\d)$/gm)) {
      setUserError((errors) => ({
        ...errors,
        ageerror: "Age must be greater than 17 and less than 60",
      }));
    } else {
      setUserError((errors) => ({ ...errors, ageerror: "" }));
    }
    if (userData["email"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        emailerror: "Email must be required",
      }));
    } else if (!userData["email"].match(/\S+@\S+\.\S+/)) {
      setUserError((errors) => ({
        ...errors,
        emailerror: "Enter proper Email address",
      }));
    } else {
      setUserError((errors) => ({ ...errors, emailerror: "" }));
    }
    if (userData["contact"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        contacterror: "Contact must be required",
      }));
    } else if (
      !userData["contact"].match(/^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/)
    ) {
      setUserError((errors) => ({
        ...errors,
        contacterror: "Enter proper contact",
      }));
    } else {
      setUserError((errors) => ({ ...errors, contacterror: "" }));
    }
    if (userData["gender"].length === 0) {
      setUserError((errors) => ({
        ...errors,
        gendererror: "Gender must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, gendererror: "" }));
    }
  };

  // useEffect(() => {
  //   checkValid();
  // }, [isErrorActive]);

  const checkValid = () => {
    if (
      userError["lasterror"] === "" &&
      userError["lasterror"] === "" &&
      userError["ageerror"] === "" &&
      userError["contacterror"] === "" &&
      userError["emailerror"] === "" &&
      userError["gendererror"] === "" &&
      isErrorActive
    ) {
      setStep(2);
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
                        <legend className="text-center">Basic Details</legend>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="firstName">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={userData["firstName"]}
                            onChange={(e) => {
                              setValue(e);
                            }}
                            name="firstName"
                            placeholder="Enter First Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="firsterror" style={{ color: "Red" }}>
                            {userError["firsterror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userData["lastName"]}
                            onChange={(e) => {
                              setValue(e);
                            }}
                            placeholder="Enter Last Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="lasterror" style={{ color: "Red" }}>
                            {userError["lasterror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="age">
                            Age
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            value={userData["age"]}
                            onChange={(e) => {
                              setValue(e);
                            }}
                            placeholder="Enter Your Age"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="ageerror" style={{ color: "Red" }}>
                            {userError["ageerror"]}
                          </span>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">
                            E - Mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={userData["email"]}
                            onChange={(e) => {
                              setValue(e);
                            }}
                            name="email"
                            placeholder="Enter Email Address"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="emailerror" style={{ color: "Red" }}>
                            {userError["emailerror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="contact">
                            Contact
                          </label>
                          <input
                            type="number"
                            id="contact"
                            name="contact"
                            value={userData["contact"]}
                            onChange={(e) => {
                              setValue(e);
                            }}
                            placeholder="Enter Phone Number"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="contacterror" style={{ color: "Red" }}>
                            {userError["contacterror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              checked={userData["gender"] === "Male"}
                              id="male"
                              onChange={(e) => {
                                setValue(e);
                              }}
                              value="Male"
                              required
                            ></input>
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              checked={userData["gender"] === "Female"}
                              onChange={(e) => {
                                setValue(e);
                              }}
                              value="Female"
                              required
                            ></input>
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="other"
                              value="Others"
                              checked={userData["gender"] === "Others"}
                              onChange={(e) => {
                                setValue(e);
                              }}
                              required
                            ></input>
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                          <br />
                          <span id="gendererror" style={{ color: "Red" }}>
                            {userError["gendererror"]}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                          setIsErrorActive(true);
                          handleChange();
                          checkValid();
                        }}
                      >
                        Next
                      </button>
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

export default Basic;
