import "./cartproducttile.css";
import CustomButton from "../../basic/custombutton/CustomButton";
import QuantityChange from "../quantitychange/QuantityChange";
import { getPriceFormat } from "../../../utils/utils";
const CartProductTile = (props) => {
  const { itemsInCart, setItemsInCart, cartItem } = props;

  const handleDelete = (cartItem) => {
    let newArray = itemsInCart.filter(
      (eachItem) => eachItem.id !== cartItem.id
    );
    setItemsInCart(newArray);
  };

  const cartItemQtyChange = (type, cartItem) => {
    let cartItems = [...itemsInCart];

    if (type === "increment") {
      cartItems.map((cartItemInArray) => {
        if (cartItemInArray.id === cartItem.id) {
          if (cartItem.maxQuantityAllowed <= cartItem.qty) {
            alert(
              `Sorry! Unable to add more than the available quantity! Available quantity is ${cartItem.maxQuantityAllowed}`
            );
          } else {
            cartItemInArray.qty++;
          }
        }
      });
      setItemsInCart(cartItems);
    } else if (type === "decrement") {
      let flag = false;
      cartItems.map((cartItemInArray) => {
        if (cartItemInArray.id === cartItem.id) {
          if (cartItem.qty === 1) {
            handleDelete(cartItem);
            flag = true;
          } else {
            cartItemInArray.qty--;
          }
        }
      });
      if (flag) return;
      setItemsInCart(cartItems);
    }
  };
  return (
    <div className="cartproduct-tile-container">
      <div className="cartproduct-tile-image-container">
        <img className="carttile-image" src={cartItem.imageURL} alt="" />
      </div>
      <div className="cartproduct-tile-desc-container">
        <div className="name-price-container">
          <div className="carttile-name">{cartItem.name}</div>
          <div className="carttile-price">
            {getPriceFormat(cartItem.price, cartItem.curreny)}/Item
          </div>
        </div>
        <div className="carttileaction-container">
          <div className="carttile-quantity">
            <QuantityChange
              cartItemQtyChange={(type) => cartItemQtyChange(type, cartItem)}
              count={cartItem.qty}
            />
          </div>
          <div className="carttile-delete">
            <CustomButton
              title="DELETE"
              onClick={() => handleDelete(cartItem)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductTile;
