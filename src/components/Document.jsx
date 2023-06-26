import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Documents = () => {
  const { setStep, userData, setUserData, documents, setDocuments } =
    useContext(multiStepContext);
  const [documentType, setDocumentType] = useState([
    "HSC",
    "Aadhar Card",
    "Photo",
    "Signature",
  ]);

  const handleAddMore = () => {
    setDocuments([...documents, { documenttype: "", attachments: "" }]);
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
                        <legend>Upload Documents</legend>
                        {documents.map((document, index) => (
                          <div key={index}>
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                htmlFor="documentType"
                              >
                                Document Type
                              </label>
                              <select
                                className="form-select"
                                id="documenttype"
                                name="documenttype"
                                value={documents[index].documenttype}
                                onChange={(event) => {
                                  const document = [...documents];
                                  document[index].documenttype =
                                    event.target.value;
                                  setDocuments(document);
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
                                Attachments
                              </label>
                              <input
                                type="file"
                                name="attachments"
                                id="attachments"
                                className="form-control form-control"
                                onChange={(event) => {
                                  const attachment = [...documents];
                                  attachment[index].attachments =
                                    event.target.value;
                                  setDocuments(attachment);
                                }}
                                required
                              ></input>
                              <span id="attachmentserror"></span>
                            </div>
                            <div style={{ color: "red" }}>
                              {index > 0 && (
                                <button
                                  className="btn btn-dark"
                                  onClick={() => {
                                    const document = [...documents];
                                    document.splice(index, 1);
                                    setDocuments(document);
                                  }}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={handleAddMore}
                          className="btn btn-dark"
                        >
                          Add More
                        </button>
                        <br />
                        <br />
                      </div>
                      <div>
                        <button
                          className="btn btn-success"
                          onClick={() => setStep(2)}
                        >
                          Prev
                        </button>
                        &emsp;
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

export default Documents;
