import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Payment = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);

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
                            value={userData["bankname"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                bankname: e.target.value,
                              });
                            }}
                            placeholder="Enter a Bank Name"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="banknameerror"></span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="carddetails">
                            Card Details
                          </label>
                          <input
                            type="number"
                            name="carddetails"
                            id="carddetails"
                            value={userData["carddetails"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                carddetails: e.target.value,
                              });
                            }}
                            placeholder="Enter a Card Details"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="carddetailserror"></span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={userData["terms"] === "true"}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                terms: e.target.value,
                              });
                            }}
                            value="true"
                          ></input>
                          <label className="form-label" htmlFor="terms">
                            Terms & Conditions
                          </label>
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
                          onClick={submitData}
                        >
                          Submit
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

export default Payment;
