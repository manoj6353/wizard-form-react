import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slot = () => {
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
                            placeholder="Enter Slot Time"
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="slottimeerror"></span>
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

export default Slot;
