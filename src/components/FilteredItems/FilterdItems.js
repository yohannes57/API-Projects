import React, { useState } from "react";
import "./FilterdItems.css";
function FilterdItems() {
  //   const [checkboxs, setCheckboxs] = useState([]);
  const [checkboxs, setCheckboxs] = useState({
    name: false,
    username: false,
    email: false,
    phoneNo: false,
    city: false,
  });
  const handleChange = (e) => {
    setCheckboxs({ ...checkboxs, [e.tagrget.name]: e.tagrget.checked });
  };
  console.log(checkboxs);
  return (
    <div className="filterditems">
      <div className="filterditems_options">
        <input
          type="checkbox"
          onChange={handleChange}
          name="name"
          checked={checkboxs.name}
        />
        <label>Name</label>
        <br />
        <input
          type="checkbox"
          onChange={handleChange}
          name="username"
          checked={checkboxs.username}
        />
        <lable>username</lable>
        <br />
        <input
          type="checkbox"
          onChange={handleChange}
          name="email"
          checked={checkboxs.email}
        />
        <label>email</label>
        <br />
        <input
          type="checkbox"
          onChange={handleChange}
          name="phoneNo"
          checked={checkboxs.phoneNo}
        />
        <lable>phoneNo</lable>
        <br />
        <input
          type="checkbox"
          onChange={handleChange}
          name="city"
          checked={checkboxs.city}
        />
        <lable>city</lable>
      </div>
    </div>
  );
}

export default FilterdItems;
