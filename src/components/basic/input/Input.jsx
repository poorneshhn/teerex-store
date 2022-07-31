import { useState } from "react";
import "./input.css";
const InputField = (props) => {
  const {
    placeholder = "Search for products...",
    value = "",
    onChange,
    onFocus,
    onBlur,
    type = "text",
  } = props;
  const [searchValue, setSeachValue] = useState(value || "");

  const handleChange = (e) => {
    setSeachValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <input
      placeholder={placeholder}
      value={searchValue}
      onChange={handleChange}
      type={type}
      className="custom-input"
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export default InputField;
