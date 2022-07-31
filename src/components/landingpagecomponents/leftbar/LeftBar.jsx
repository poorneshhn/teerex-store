import CheckBoxWithLabel from "../../basic/checkboxwithlabel/CheckBoxWithLabel";
import { filtersList } from "../../../constants/filterConstants";
import "./leftbar.css";
import { useEffect } from "react";

const LeftBar = (props) => {
  return (
    <div className="leftbar-container">
      {filtersList.map((filterCategory) => {
        return (
          <div key={filterCategory.id} className="filters-container">
            <div className="filter-type-label">{filterCategory.label}</div>
            {filterCategory.filters.map((filterItem) => {
              return (
                <CheckBoxWithLabel
                  key={filterItem.id}
                  label={filterItem.label}
                  type={
                    filterCategory.label === "Price"
                      ? "currency"
                      : "notcurrency"
                  }
                  onFilterChange={(e, label) =>
                    props.onFilterChange(e, label, filterCategory.label)
                  }
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LeftBar;
