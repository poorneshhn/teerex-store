import { trimItemSpacesInArray } from "./utils";

export const setAllFilters = (currentFilterObject, changedValue) => {
  return { ...currentFilterObject, ...changedValue };
};

export const setCheckBoxFilters = (currentCheckBoxFilter, checked, label) => {
  let newSelectedFilters;
  if (currentCheckBoxFilter.includes(label) && !checked) {
    newSelectedFilters = currentCheckBoxFilter.filter(
      (filter) => filter !== label
    );
  } else {
    if (checked) {
      newSelectedFilters = [...currentCheckBoxFilter, label];
    }
  }
  return newSelectedFilters;
};

export const filterProductsBasedOnSelectedFilters = (productList, filters) => {
  let filterKeys = Object.keys(filters).filter(
    (filterItem) => filterItem !== "price" && filterItem !== "name"
  );

  let newArray = [...productList];
  let value = filters.name.toLowerCase();

  newArray = newArray.filter((productItem) => {
    let { name, price, type } = productItem;
    return (
      name.toLowerCase().includes(value) ||
      price.toString().toLowerCase().includes(value) ||
      type.toLowerCase().includes(value)
    );
  });

  newArray = newArray.filter((productItem) => {
    for (let key of filterKeys) {
      if (filters[key].length > 0 && filters[key].includes(productItem[key])) {
        continue;
      } else if (filters[key].length === 0) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  });

  if (filters["price"].length < 1) return newArray;

  return filterBasedOnPrice(newArray, filters["price"]);
};

export const filterBasedOnPrice = (productList, priceFilter) => {
  let minMaxArray = priceFilter.map((filter) => {
    if (filter.length > 0) {
      let splitValues = filter.split("-");
      splitValues = trimItemSpacesInArray(splitValues);
      return { min: splitValues[0], max: splitValues[1] };
    }
  });

  let array = productList.filter((productItem) => {
    return checkifFallsBetweenMinAndMaxValue(minMaxArray, productItem);
  });
  return array;
};

export const checkifFallsBetweenMinAndMaxValue = (minMaxArray, productItem) => {
  if (!Array.isArray(minMaxArray)) {
    throw new Error("Min max is not array");
  }

  if (minMaxArray.length < 1) return true;

  for (let item of minMaxArray) {
    if (item.max === "Above") {
      item.max = Infinity;
    }
    if (productItem.price >= item.min && productItem.price <= item.max) {
      return true;
    }
  }

  return false;
};
