import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Basic = () => {
  const { setStep, userData, setUserData, userError, setUserError } =
    useContext(multiStepContext);
  const [isErrorActive, setIsErrorActive] = useState(false);

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
  };

  const handleChange = () => {
    console.log(userData[0].firstName.length);
    if (userData[0].firstName.length <= 1) {
      setUserError((errors) => ({
        ...errors,
        firsterror: "First Name must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, firsterror: "" }));
    }
    // setStep(2);
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
                            value={userData[0].firstName}
                            onChange={(e) => {
                              console.log(isErrorActive);
                              isErrorActive && handleChange();
                              setValue(e);
                            }}
                            name="firstName"
                            placeholder="Enter First Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="firsterror">{userError["firsterror"]}</span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="lastName">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={userData[0].lastName}
                            onChange={() => {
                              console.log(isErrorActive);
                              isErrorActive && handleChange();
                              setValue();
                            }}
                            placeholder="Enter Last Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="lasterror">{userError["lasterror"]}</span>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="age">
                              Age
                            </label>
                            <input
                              type="number"
                              id="age"
                              name="age"
                              value={userData[0].age}
                              onChange={setValue}
                              placeholder="Enter Your Age"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="ageerror">{userError["ageerror"]}</span>
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              E - Mail
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={userData[0].email}
                              onChange={setValue}
                              name="email"
                              placeholder="Enter Email Address"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="emailerror">
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
                              value={userData[0].contact}
                              onChange={setValue}
                              placeholder="Enter Phone Number"
                              className="form-control form-control"
                              required
                            ></input>
                            <span id="contacterror">
                              {userError["contacterror"]}
                            </span>
                          </div>
                          <div className="form-outline mb-4">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                checked={userData[0].gender === "Male"}
                                id="male"
                                onChange={setValue}
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
                                checked={userData[0].gender === "Female"}
                                onChange={setValue}
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
                                checked={userData[0].gender === "Others"}
                                onChange={setValue}
                                required
                              ></input>
                              <label
                                className="form-check-label"
                                htmlFor="other"
                              >
                                Other
                              </label>
                            </div>
                            <span id="gendererror">
                              {userError["gendererror"]}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p
                        className="btn btn-success"
                        onClick={() => {
                          handleChange();
                          setIsErrorActive(true);
                        }}
                      >
                        Next
                      </p>
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
