import React, { useContext, useEffect, useState } from "react";
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

  const setValue = async (e, index) => {
    const document = [...documents];

    document[index][e.target.name] = e.target.value;
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const files = await getBase64(file);
      document[index][e.target.name] = files;
      document[index]["attachmentsize"] = e.target.files[0].size / 1024 / 1024;
      document[index]["attachmentstype"] = e.target.files[0].type;
    }
    setDocuments(document);
    setErrorTrue(e);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
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
        id: Math.random(),
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
    console.log("=====", documents);
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
                          <div key={documents[index].id}>
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
                              <img
                                width={100}
                                height={100}
                                id="imgPreview"
                                src={documents[index].attachments}
                                alt="pic"
                              />
                              <input
                                type="file"
                                name="attachments"
                                accept=".png, .jpg, .jpeg"
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
                                  type="button"
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
                        <button
                          type="button"
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
                          type="button"
                          className="btn btn-success"
                          onClick={() => setStep(2)}
                        >
                          Prev
                        </button>
                        &emsp;
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => {
                            setIsErrorActive(true);
                            handleChange();
                            checkValid();
                          }}
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
