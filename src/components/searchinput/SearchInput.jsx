import IconComponent from "../basic/iconcomponent/IconComponent";
import "./searchinput.css";
import InputField from "../basic/input/Input";
const SearchInput = (props) => {
  const { value = "", handleChange, onFocus, onBlur } = props;
  return (
    <div className="searchinput-container">
      <div className="searchinput-input-container">
        <InputField
          placeholder="Search for products..."
          value={value}
          onChange={handleChange}
          type="search"
          className="search-input"
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      <div className="search-searchicon-container">
        <IconComponent iconType="search" />
      </div>
      <div className="search-filtericon-container">
        <IconComponent iconType="filter" />
      </div>
    </div>
  );
};

export default SearchInput;
