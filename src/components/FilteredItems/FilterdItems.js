import React, { useState } from "react";
import "./FilterdItems.css";
import axios from "axios";
import HomeProps from "../HomeProps/HomeProps";
function FilterdItems() {
  //   const [checkboxs, setCheckboxs] = useState([]);
  const [checkboxs, setCheckboxs] = useState({
    name: false,
    username: false,
    email: false,
    phoneNo: false,
    city: false,
  });
  const [items, setItems] = useState([]);
  const [value, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phoneNo: "",
    city: "",
  });
  const handleChange = (e) => {
    setCheckboxs({ ...checkboxs, [e.target.name]: e.target.checked });
  };

  const handleShowFilterdItems = async (e) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setItems(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  //   console.log(items);
  console.log(value);

  return (
    <div className="filterditems">
      <div className="filterditems_options">
        <h4>Select From The list to filter by them:</h4>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="name"
            checked={checkboxs.name}
          />
          Name
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="username"
            checked={checkboxs.username}
          />
          username
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="email"
            checked={checkboxs.email}
          />
          email
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="phoneNo"
            checked={checkboxs.phoneNo}
          />
          phoneNo
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="city"
            checked={checkboxs.city}
          />
          city
        </label>
        <br />
        <br />
        <button onClick={handleShowFilterdItems}>Show FilterdItems</button>
        <div>
          {items?.map((val) => (
            <HomeProps
              name={checkboxs.name ? val.name : ""}
              username={checkboxs.username ? val.username : " "}
              email={checkboxs.email ? val.email : ""}
              city={checkboxs.city ? val.city : ""}
              zipcode={checkboxs.phoneNo ? val.phone : " "}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterdItems;
