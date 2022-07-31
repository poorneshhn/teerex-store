import "./checkboxwithlabel.css";
import { getRupeeSymbol } from "../../../utils/utils";

const CheckBoxWithLabel = (props) => {
  const { label, type, onFilterChange } = props;
  return (
    <div className="custom-checkbox-container">
      <input
        className="custom-checkbox-checkbox"
        id={label}
        onClick={(e) => onFilterChange(e, label)}
        type="checkbox"
      />
      {type === "currency" ? (
        <label className="custom-checkbox-label" htmlFor={label}>
          {getRupeeSymbol()}
          {label}
        </label>
      ) : (
        <label className="custom-checkbox-label" htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBoxWithLabel;
