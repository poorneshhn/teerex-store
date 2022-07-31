import "./cartpage.css";
import Header from "../../components/header/Header";
import Layout from "../../components/layout/Layout";
import CartProductList from "../../components/cart/cartproductslist/CartProductList";
import { getTotalCartQuantity } from "../../utils/utils";
const CartPage = ({ itemsInCart, setItemsInCart }) => {
  return (
    <div>
      <Header cartItemCount={getTotalCartQuantity(itemsInCart)} />
      <Layout>
        <CartProductList
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
      </Layout>
    </div>
  );
};

export default CartPage;
