import "./plplayout.css";
import ProductList from "../product/productlistcomponent/ProductList";
import SearchInput from "../../searchinput/SearchInput";
import LeftBar from "../leftbar/LeftBar";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../../api/productService";
import {
  filterProductsBasedOnSelectedFilters,
  setAllFilters,
  setCheckBoxFilters,
} from "../../../utils/filterFunctions";

const PlpLayout = (props) => {
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    type: [],
    color: [],
    gender: [],
    name: "",
  });
  const [filteredProductList, setFilteredProductList] = useState(productList);

  const onFilterChange = (e, label, category) => {
    category = category.toLowerCase();
    let newCheckBoxChangeFilter = setCheckBoxFilters(
      selectedFilters[category],
      e.target.checked,
      label
    );

    let newFilterObject = setAllFilters(selectedFilters, {
      [category]: newCheckBoxChangeFilter,
    });
    setSelectedFilters(newFilterObject);

    let filteredItems = filterProductsBasedOnSelectedFilters(
      productList,
      newFilterObject
    );
    setFilteredProductList(filteredItems);
  };

  const searchValueChange = (value) => {
    let newFilterObject = setAllFilters(selectedFilters, {
      name: value,
    });
    setSelectedFilters(newFilterObject, { name: value });

    let filteredItems = filterProductsBasedOnSelectedFilters(
      productList,
      newFilterObject
    );
    setFilteredProductList(filteredItems);
  };

  useEffect(() => {
    (async () => {
      const res = await fetchAllProducts();
      setProductList(res);
    })();
  }, []);

  useEffect(() => {
    setFilteredProductList(productList);
  }, [productList]);

  return (
    <div className="plplayout-container">
      <div className="plplayout-leftbar-container">
        <LeftBar onFilterChange={onFilterChange} />
      </div>
      <div className="products-layout">
        <SearchInput handleChange={searchValueChange} />
        <ProductList
          setItemsInCart={props.setItemsInCart}
          itemsInCart={props.itemsInCart}
          productList={filteredProductList}
        />
      </div>
    </div>
  );
};

export default PlpLayout;
