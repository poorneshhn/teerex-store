export const getPriceFormat = (price, currency = "INR") => {
  try {
    if (currency === "INR") {
      let indianLocaleCurrency = Intl.NumberFormat("en-IN");
      price = indianLocaleCurrency.format(Number(price));
      return <span>&#8377;{price}</span>;
    } else if (currency === "USD") {
      let dollarUSLocaleCurrency = Intl.NumberFormat("en-US");
      price = dollarUSLocaleCurrency.format(Number(price));

      return <span>&#36;{price}</span>;
    }
  } catch (error) {
    console.log("error occured priceIndianFormat ", error);
  }
};

export const getRupeeSymbol = () => {
  return <span>&#8377;</span>;
};

export const getDollarSymbol = () => {
  return <span>&#36;</span>;
};

export const trimItemSpacesInArray = (array) => {
  if (Array.isArray(array)) {
    return array.map((item) => {
      return item.toString().trim();
    });
  }

  return [];
};

export const getTotalCartQuantity = (productsInCart) => {
  if (productsInCart.length < 1) {
    return 0;
  }
  return productsInCart.reduce((total, current) => total + current.qty, 0);
};

export const getCartTotal = (productsInCart) => {
  if (productsInCart.length < 1) {
    return 0;
  }

  return productsInCart.reduce(
    (total, current) => total + current.qty * current.price,
    0
  );
};
