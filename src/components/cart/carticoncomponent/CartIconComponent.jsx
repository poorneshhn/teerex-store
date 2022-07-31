import "./carticoncomponent.css";
import cartImage from "../../../assets/images/carticon.png";
const CartIconComponent = (props) => {
  return (
    <div className="carticon-container">
      <div className="cart-count">{props.itemCount}</div>
      <img className="carticon-image" src={cartImage} alt="" />
    </div>
  );
};

export default CartIconComponent;
