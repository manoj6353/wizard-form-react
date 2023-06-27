import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Slot = () => {
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
    if (userData[0].slotdate.length === 0) {
      setUserError((errors) => ({
        ...errors,
        slotdateerror: "Date must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, slotdateerror: "" }));
    }
    if (userData[0].slottime.length === 0) {
      setUserError((errors) => ({
        ...errors,
        slottimeerror: "Time must be required",
      }));
    } else {
      setUserError((errors) => ({ ...errors, slottimeerror: "" }));
    }
  };

  const checkValid = () => {
    if (
      userError["slotdateerror"] === "" &&
      userError["slottimeerror"] === "" &&
      isErrorActive
    ) {
      setStep(5);
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
                        <legend>Slot Booking</legend>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="slotdate">
                            Slot Date
                          </label>
                          <input
                            type="date"
                            name="slotdate"
                            id="slotdate"
                            value={userData[0].slotdate}
                            onChange={setValue}
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="slotdateerror" style={{ color: "Red" }}>
                            {userError["slotdateerror"]}
                          </span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="slottime">
                            Slot Time
                          </label>
                          <input
                            type="time"
                            name="slottime"
                            id="slottime"
                            value={userData[0].slottime}
                            onChange={setValue}
                            placeholder="Enter Slot Time"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="slottimeerror" style={{ color: "Red" }}>
                            {userError["slottimeerror"]}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p
                          className="btn btn-success"
                          onClick={() => setStep(3)}
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

export default Slot;
