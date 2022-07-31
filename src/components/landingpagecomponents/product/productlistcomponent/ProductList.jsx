import "./productlist.css";
import ProductTile from "../producttile/ProductTile";
import { useState } from "react";

const ProductList = (props) => {
  return (
    <div className="productlist-container">
      {props.productList.map((product) => {
        return (
          <ProductTile
            setItemsInCart={props.setItemsInCart}
            itemsInCart={props.itemsInCart}
            key={product.id}
            product={product}
            page="plp"
          />
        );
      })}
    </div>
  );
};

export default ProductList;
