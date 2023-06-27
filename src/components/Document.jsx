import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "../StepContext";

const Documents = () => {
  const {
    setStep,
    documents,
    setDocuments,
    documentsError,
    setDocumentsError,
  } = useContext(multiStepContext);

  const [isErrorActive, setIsErrorActive] = useState(false);
  const [errorTrue, setErrorTrue] = useState("");

  const setValue = (e, index) => {
    const document = [...documents];
    document[index][e.target.name] = e.target.value;
    if (e.target.type === "file") {
      document[index][e.target.name] = e.target.files[0].name || "";
      document[index]["attachmentsize"] = e.target.files[0].size / 1024 / 1024;
      document[index]["attachmentstype"] = e.target.files[0].type;
    }
    setDocuments(document);
    setErrorTrue(e);
  };

  useEffect(() => {
    isErrorActive && handleChange();
  }, [errorTrue]);

  const handleChange = () => {
    documentsError.map((e, index) => {
      if (documents[index].documenttype.length === 0) {
        const documentError = [...documentsError];
        documentError[index].documenttypeerror = "Document must be required";
        setDocumentsError(documentError);
      } else {
        const documentError = [...documentsError];
        documentError[index].documenttypeerror = "";
        setDocumentsError(documentError);
      }
      if (documents[index].attachments.length === 0) {
        const documentError = [...documentsError];
        documentError[index].attachmentserror = "Image must be required";
        setDocumentsError(documentError);
      } else if (documents[index].attachmentsize > 1) {
        const documentError = [...documentsError];
        documentError[index].attachmentserror = "Image less than 1 MB";
        setDocumentsError(documentError);
      } else if (
        !documents[index].attachments.match(/\.(jpg|jpeg|png|img)$/i)
      ) {
        const documentError = [...documentsError];
        documentError[index].attachmentserror =
          "Image must be of type jpg/jpeg/png/img";
        setDocumentsError(documentError);
        console.log(
          "documents[index].attachmentstype.includes(imageType)",
          !documents[index].attachments.match(/\.(jpg|jpeg|png|img)$/i)
        );
      } else {
        const documentError = [...documentsError];
        documentError[index].attachmentserror = "";
        setDocumentsError(documentError);
      }
    });
  };

  const checkValid = () => {
    documentsError.map((item, index) => {
      if (
        documentsError[index].attachmentserror === "" &&
        documentsError[index].documenttypeerror === "" &&
        isErrorActive
      ) {
        setStep(4);
      } else {
        return false;
      }
    });
  };

  const handleAddMore = () => {
    setDocuments([
      ...documents,
      {
        documenttype: "",
        attachments: "",
        attachmentsize: "",
      },
    ]);
    setDocumentsError([
      ...documentsError,
      {
        documenttypeerror: "",
        attachmentserror: "",
        attachmentsizeerror: "",
      },
    ]);
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
                                onChange={(e) => {
                                  setValue(e, index);
                                }}
                                required
                              >
                                <option value="HSC">HSC Marksheet</option>
                                <option value="AADHAR-CARD">Aadhar Card</option>
                                <option value="PHOTO">Photo</option>
                                <option value="SIGNATURE">Signature</option>
                              </select>
                              <span id="documenterror" style={{ color: "Red" }}>
                                {documentsError[index].documenttypeerror}
                              </span>
                            </div>
                            <div className="form-outline mb-4">
                              <label className="form-label" htmlFor="city">
                                Attachments
                              </label>
                              <br />
                              <label className="form-label" htmlFor="city">
                                {documents[index].attachments}
                              </label>
                              <input
                                type="file"
                                name="attachments"
                                id="attachments"
                                className="form-control form-control"
                                onChange={(e) => {
                                  setValue(e, index);
                                }}
                                required
                              ></input>
                              <span
                                id="attachmentserror"
                                style={{ color: "Red" }}
                              >
                                {documentsError[index].attachmentserror}
                              </span>
                            </div>
                            <div style={{ textAlign: "end" }}>
                              {index > 0 && (
                                <button
                                  className="btn btn-dark"
                                  onClick={() => {
                                    const document = [...documents];
                                    document.splice(index, 1);
                                    const documentError = [...documentsError];
                                    documentError.splice(index, 1);
                                    setDocuments(document);
                                    setDocumentsError(documentError);
                                  }}
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        <p onClick={handleAddMore} className="btn btn-dark">
                          Add More
                        </p>
                        <br />
                        <br />
                      </div>
                      <div>
                        <p
                          className="btn btn-success"
                          onClick={() => setStep(2)}
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

export default Documents;
