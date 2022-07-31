import { getPriceFormat } from "../../../../utils/utils";
import CustomButton from "../../../basic/custombutton/CustomButton";
import "./producttile.css";

const ProductTile = (props) => {
  const { imageURL, name, currency, price } = props.product;
  const { product, itemsInCart, setItemsInCart } = props;

  const addToCart = (product) => {
    let flag = false;
    let cartItems = [...itemsInCart];
    cartItems.map((cartItem) => {
      if (cartItem.id === product.id) {
        if (cartItem.maxQuantityAllowed > cartItem.qty) {
          cartItem.qty++;
          setItemsInCart(cartItems);
        } else {
          alert(
            "You already have this product in the cart with maximum available quantity!"
          );
        }

        flag = true;
      }
    });

    if (flag) {
      return;
    }

    let obj = {
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      qty: 1,
      currency: product.currency,
      id: product.id,
      maxQuantityAllowed: product.quantity,
    };
    setItemsInCart([...itemsInCart, obj]);
  };
  return (
    <div className="producttile-container">
      <div className="product-image-container">
        <img className="product-image" src={imageURL} alt="" />
      </div>
      <div className="product-desc-container">
        <div className="tile-name-price-container">
          <div>{name}</div>
          <div>{getPriceFormat(price, currency)}</div>
        </div>
        <CustomButton title="Add to Cart" onClick={() => addToCart(product)} />
      </div>
    </div>
  );
};

export default ProductTile;
