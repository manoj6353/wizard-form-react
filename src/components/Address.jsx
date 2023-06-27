import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Address = () => {
  const { setStep, userData, setUserData, userError, setUserError } =
    useContext(multiStepContext);
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
    if (userData[0].address.length === 0) {
      setUserError((errors) => ({
        ...errors,
        addresserror: "Address must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, addresserror: "" }));
    }
    if (userData[0].city.length === 0) {
      setUserError((errors) => ({
        ...errors,
        cityerror: "City must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, cityerror: "" }));
    }
    if (userData[0].state.length === 0) {
      setUserError((errors) => ({
        ...errors,
        stateerror: "State must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, stateerror: "" }));
    }
    if (userData[0].pincode.length === 0) {
      setUserError((errors) => ({
        ...errors,
        pincodeerror: "PinCode must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, pincodeerror: "" }));
    }
  };

  const checkValid = () => {
    if (
      userError["addresserror"] === "" &&
      userError["pincodeerror"] === "" &&
      userError["stateerror"] === "" &&
      userError["cityerror"] === "" &&
      isErrorActive
    ) {
      setStep(3);
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
                        <legend>Address</legend>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="address">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            value={userData[0].address}
                            onChange={setValue}
                            className="form-control form-control"
                            placeholder="Address Line 1"
                            required
                          ></input>
                          <span id="addresserror" style={{ color: "Red" }}>
                            {userError["addresserror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="city">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            value={userData[0].city}
                            onChange={setValue}
                            placeholder="Enter City"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="cityerror" style={{ color: "Red" }}>
                            {userError["cityerror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="state">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            value={userData[0].state}
                            onChange={setValue}
                            placeholder="Enter State"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="stateerror" style={{ color: "Red" }}>
                            {userError["stateerror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="pincode">
                            PinCode
                          </label>
                          <input
                            type="number"
                            name="pincode"
                            id="pincode"
                            value={userData[0].pincode}
                            onChange={setValue}
                            placeholder="Enter Pincode"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="pincodeerror" style={{ color: "Red" }}>
                            {userError["pincodeerror"]}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p
                          className="btn btn-success"
                          onClick={() => setStep(1)}
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
                          Next
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

export default Address;
