import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Basic = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const initialValues = { firstName: "", lastName: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const handleChange = (e) => {
    const { firstName, value } = e.target;
    console.log(firstName);
    setFormValues({
      ...formValues,
      [firstName]: value,
    });
    console.log(formValues);
    setStep(2);
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
                              setUserData({
                                ...userData,
                                firstName: e.target.value,
                              });
                            }}
                            name="firstName"
                            placeholder="Enter First Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="firsterror"></span>
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
                              setUserData({
                                ...userData,
                                lastName: e.target.value,
                              });
                            }}
                            placeholder="Enter Last Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="lasterror"></span>

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
                                setUserData({
                                  ...userData,
                                  age: e.target.value,
                                });
                              }}
                              placeholder="Enter Your Age"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="ageerror"></span>
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
                                setUserData({
                                  ...userData,
                                  email: e.target.value,
                                });
                              }}
                              name="email"
                              placeholder="Enter Email Address"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="emailerror"></span>
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
                                setUserData({
                                  ...userData,
                                  contact: e.target.value,
                                });
                              }}
                              placeholder="Enter Phone Number"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="contacterror"></span>
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
                                  setUserData({
                                    ...userData,
                                    gender: e.target.value,
                                  });
                                }}
                                value="Male"
                                required
                              ></input>
                              <label
                                className="form-check-label"
                                htmlFor="male"
                              >
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
                                  setUserData({
                                    ...userData,
                                    gender: e.target.value,
                                  });
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
                                  setUserData({
                                    ...userData,
                                    gender: e.target.value,
                                  });
                                }}
                                required
                              ></input>
                              <label
                                className="form-check-label"
                                htmlFor="other"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn btn-success"
                        onClick={handleChange}
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
