const FormDropdown = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <select className="form-input" onChange={handleChange} {...otherProps}>
        <option></option>
        <option value="Government">Government</option>
        <option value="Salaried">Salaried</option>
        <option value="Other">Other</option>
      </select>

      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormDropdown;
