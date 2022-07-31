import "./quantitychange.css";
const QuantityChange = (props) => {
  const { count = 1, cartItemQtyChange } = props;
  return (
    <div className="quantitychange-container">
      <div className="pointer" onClick={() => cartItemQtyChange("decrement")}>
        -
      </div>
      <div className="quantity-count">{count}</div>
      <div className="pointer" onClick={() => cartItemQtyChange("increment")}>
        +
      </div>
    </div>
  );
};

export default QuantityChange;
