import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Address = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

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
                          <span id="addresserror"></span>
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
                          <span id="cityerror"></span>
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
                          <span id="stateerror"></span>
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
                          <span id="pincodeerror"></span>
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(1)}
                        >
                          Prev
                        </button>
                        &emsp;
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(3)}
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

export default Address;
