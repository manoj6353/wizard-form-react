import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Slot = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
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
                            value={userData["slotdate"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                slotdate: e.target.value,
                              });
                            }}
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="slotdateerror"></span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="slottime">
                            Slot Time
                          </label>
                          <input
                            type="number"
                            name="slottime"
                            id="slottime"
                            value={userData["slottime"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                slottime: e.target.value,
                              });
                            }}
                            placeholder="Enter Slot Time"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="slottimeerror"></span>
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(3)}
                        >
                          Prev
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(5)}
                        >
                          Next
                        </button>
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
