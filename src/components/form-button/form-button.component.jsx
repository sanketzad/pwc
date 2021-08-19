import "./form-button.styles.css";

const FormButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

export default FormButton;
