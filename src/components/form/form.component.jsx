import { useState, useContext } from "react";
import FormButton from "../form-button/form-button.component";

import FormDate from "../form-date/form-date.component";
import FormDropdown from "../form-dropdown/form-dropdown.component";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../userContext";
import "./form.styles.css";

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    address: "",
    occupation: "",
    dob: "",
  });

  const [users, setUsers] = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const currentDate = new Date();
      const enteredDate = value.split("-");
      if (
        !(
          enteredDate[0] <= currentDate.getFullYear() &&
          enteredDate[1] <= currentDate.getMonth() + 1 &&
          enteredDate[2] <= currentDate.getDate()
        )
      ) {
        return alert("Date should not be greater than today's date");
      }
      console.log(value);
    }
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, details]);
    setDetails({
      name: "",
      address: "",
      occupation: "",
      dob: "",
    });
  };

  const { name, address, occupation, dob } = details;

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Name"
          name="name"
          value={name}
          handleChange={handleChange}
          required
        />

        <FormInput
          type="text"
          label="Address"
          name="address"
          value={address}
          handleChange={handleChange}
          required
        />

        <FormDropdown
          name="occupation"
          value={occupation}
          label="Occupation"
          handleChange={handleChange}
          required
        />

        <FormDate
          type="date"
          name="dob"
          value={dob}
          label="Date of Birth"
          handleChange={handleChange}
          required
        />

        <FormButton type="submit">Add User</FormButton>
      </form>
    </div>
  );
};

export default Form;
