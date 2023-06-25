import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Document = () => {
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
                        <legend>Upload Documents</legend>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="documentType">
                            Document Type
                          </label>
                          <select
                            class="form-select"
                            id="documenttype"
                            name="documenttype"
                            value={userData["documenttype"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                documenttype: e.target.value,
                              });
                            }}
                            required
                          >
                            <option value="HSC" selected>
                              HSC Marksheet
                            </option>
                            <option value="AADHAR-CARD">Aadhar Card</option>
                            <option value="PHOTO">Photo</option>
                            <option value="SIGNATURE">Signature</option>
                          </select>
                          <span id="documenterror"></span>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="city">
                            City
                          </label>
                          <input
                            type="file"
                            name="attachments"
                            id="attachments"
                            value={userData["attachments"]}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                attachments: e.target.value,
                              });
                            }}
                            className="form-control form-control"
                            required
                          ></input>
                          <span id="attachmentserror"></span>
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(2)}
                        >
                          Prev
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(4)}
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

export default Document;
