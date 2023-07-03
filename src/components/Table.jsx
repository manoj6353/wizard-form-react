import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";
const Table = () => {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const { setUserData, setDocuments, setDocumentsError } =
    useContext(multiStepContext);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("save-data") || "[]");
    setData(result);
  }, []);

  const navigate = useNavigate();

  const [isDelete, setIsDelete] = useState("");
  const deleteData = (id) => {
    let data = JSON.parse(localStorage.getItem("save-data"));
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("save-data", JSON.stringify(data));
    if (data.length === 0) {
      localStorage.removeItem("save-data");
      setIsDelete("");
    }
    setIsDelete(id);
  };

  const editData = (id) => {
    let data = JSON.parse(localStorage.getItem("save-data"));
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

  const [sortData, setSortData] = useState("asc");
  const [sortColumn, setSortColumn] = useState("");

  let sort = data;

  useEffect(() => {
    if (sortData === "asc") {
      const strAscending = [...data].sort((a, b) =>
        a?.[sortColumn] > b?.[sortColumn] ? 1 : -1
      );
      setSortData("desc");
      setTempData(strAscending);
    } else if (sortData === "desc") {
      const strDescending = [...data].sort((a, b) =>
        a?.[sortColumn] > b?.[sortColumn] ? -1 : 1
      );
      setSortData("");
      setTempData(strDescending);
    } else {
      const defaults = [...data].sort((a, b) => b);
      setSortData("asc");
      setTempData(defaults);
    }
  }, [sortColumn]);

  const sorting = (sorting) => {
    setSortColumn(sorting);
    if (sortColumn !== sorting) {
      setSortData("asc");
    } else {
      if (sortData === "asc") {
        const strAscending = [...data].sort((a, b) =>
          a?.[sorting] > b?.[sorting] ? 1 : -1
        );
        setSortData("desc");
        setTempData(strAscending);
      } else if (sortData === "desc") {
        const strDescending = [...data].sort((a, b) =>
          a?.[sorting] > b?.[sorting] ? -1 : 1
        );
        setSortData("");
        setTempData(strDescending);
      } else {
        setTempData(sort);
        setSortData("asc");
      }
    }
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("save-data") || "[]");
    setTempData(result);
  }, [isDelete]);

  const searchFun = (e) => {
    let data = JSON.parse(localStorage.getItem("save-data"));
    const search = e.target.value;
    data = data.filter(
      (item) =>
        item.firstName.includes(search) ||
        item.lastName.includes(search) ||
        item.age.includes(search) ||
        item.email.includes(search) ||
        item.contact.includes(search) ||
        item.id.toString().includes(search) ||
        item.gender.includes(search)
    );
    if (data !== []) {
      setTempData(data);
      sort = data;
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="search"
          placeholder="Enter Search text....."
          onKeyUp={(e) => searchFun(e)}
        ></input>
      </div>
      <br />
      <table id="TABLE">
        <thead>
          <tr>
            <th onClick={() => sorting("id")}>Id</th>
            <th onClick={() => sorting("firstName")}>FirstName</th>
            <th onClick={() => sorting("lastName")}>LastName</th>
            <th onClick={() => sorting("age")}>Age</th>
            <th onClick={() => sorting("email")}>Email</th>
            <th onClick={() => sorting("contact")}>Contact</th>
            <th onClick={() => sorting("gender")}>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            data.map((d, index) => (
              <tr key={index}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.age}</td>
                <td>{d.email}</td>
                <td>{d.contact}</td>
                <td>{d.gender}</td>
                <td>
                  <span onClick={() => deleteData(d.id)}>Delete</span> /
                  <span onClick={() => editData(d.id)}>Edit</span>
                </td>
              </tr>
            ))
          ) : (
            <tr style={{ textAlign: "center" }}>
              <td colSpan={8}>No record Found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div></div>
    </>
  );
};

export default Table;
