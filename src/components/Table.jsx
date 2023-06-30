import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";
const Table = () => {
  const [data, setData] = useState([]);
  const { setUserData, setDocuments, setDocumentsError } =
    useContext(multiStepContext);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("data") || "[]");
    setData(result);
  }, []);

  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState("");
  const deleteData = (id) => {
    let data = JSON.parse(localStorage.getItem("data"));
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    if (data.length === 0) {
      localStorage.removeItem("data");
      setIsDelete("");
    }
    setIsDelete(id);
  };
  const editData = (id) => {
    let data = JSON.parse(localStorage.getItem("data"));
    const index = data.findIndex((item) => item.id === id);
    data = data.filter((item) => item.id === id);
    setUserData({
      index: index,
      id: id,
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      age: data[0].age,
      email: data[0].email,
      contact: data[0].contact,
      gender: data[0].gender,
      address: data[0].address,
      city: data[0].city,
      state: data[0].state,
      pincode: data[0].pincode,
      slotdate: data[0].slotdate,
      slottime: data[0].slottime,
      bankname: data[0].bankname,
      carddetails: data[0].carddetails,
      terms: data[0].terms,
    });

    setDocuments(
      data[0].documents.map((item) => {
        return {
          ...item,
          documenttype: item.documenttype,
          attachments: item.attachments,
          attachmentsize: item.attachmentsize || "",
        };
      })
    );
    setDocumentsError(
      data[0].documents.map((item) => {
        return {
          documenttypeerror: "",
          attachmentserror: "",
          attachmentsizeerror: "",
        };
      })
    );
    navigate("/");
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("data") || "[]");
    setData(result);
  }, [isDelete]);

  return (
    <>
      <table id="TABLE">
        <thead>
          <tr id="TABLE">
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.age}</td>
              <td>{d.email}</td>
              <td>{d.contact}</td>
              <td>{d.gender}</td>
              <td>
                <a onClick={() => deleteData(d.id)}>Delete</a> /
                <a onClick={() => editData(d.id)}>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </>
  );
};

export default Table;
