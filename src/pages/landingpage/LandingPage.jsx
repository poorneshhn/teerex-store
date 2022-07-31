import Header from "../../components/header/Header";
import Layout from "../../components/layout/Layout";
import PlpLayout from "../../components/landingpagecomponents/plplayout/PlpLayout";
import { getTotalCartQuantity } from "../../utils/utils";

const LandingPage = ({ setItemsInCart, itemsInCart }) => {
  return (
    <div>
      <Header cartItemCount={getTotalCartQuantity(itemsInCart)} />
      <Layout>
        <PlpLayout itemsInCart={itemsInCart} setItemsInCart={setItemsInCart} />
      </Layout>
    </div>
  );
};

export default LandingPage;
