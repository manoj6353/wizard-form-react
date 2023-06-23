import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Payment = () => {
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
                            placeholder="Enter a Card Details"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="carddetailserror"></span>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="checkbox" name="terms" value="true">
                            Tearms and Conditions
                          </input>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-success">
                        Submit
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

export default Payment;
