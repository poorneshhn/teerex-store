import searchIcon from "../../../assets/images/searchicon.png";
import filterIcon from "../../../assets/images/filtericon.png";
import "./iconcomponent.css";

const IconComponent = (props) => {
  const { iconType = "search" } = props;

  if (iconType === "search") {
    return (
      <div className="searchicon-container">
        <img className="search-icon" src={searchIcon} alt="" />
      </div>
    );
  } else if (iconType === "filter") {
    return (
      <div className="searchicon-container">
        <img className="search-icon" src={filterIcon} alt="" />
      </div>
    );
  }
};

export default IconComponent;
