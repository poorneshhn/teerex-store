import "./cartsummary.css";

const CartSummary = ({ cartTotal }) => {
  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <div className="cart-total">
        <h4>Total</h4>
        <h4>{cartTotal}</h4>
      </div>
    </div>
  );
};

export default CartSummary;
