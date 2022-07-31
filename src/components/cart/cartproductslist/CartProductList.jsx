import "./cartproductlist.css";
import CartProductTile from "../cartproducttile/CartProductTile";
import CartSummary from "../cartsummary/CartSummary";
import { getCartTotal } from "../../../utils/utils";
const CartProductList = ({ itemsInCart, setItemsInCart }) => {
  return (
    <div className="cartproduct-list-container">
      <div className="cartItem-list-container">
        {itemsInCart.length > 0 ? (
          itemsInCart.map((cartItem) => {
            return (
              <CartProductTile
                itemsInCart={itemsInCart}
                setItemsInCart={setItemsInCart}
                key={cartItem.id}
                cartItem={cartItem}
              />
            );
          })
        ) : (
          <h2>No products added to cart</h2>
        )}
      </div>
      {itemsInCart.length > 0 && (
        <div className="cartsummary-container">
          <CartSummary cartTotal={getCartTotal(itemsInCart)} />
        </div>
      )}
    </div>
  );
};

export default CartProductList;
