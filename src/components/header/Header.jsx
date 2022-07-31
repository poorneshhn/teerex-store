import CartIconComponent from "../cart/carticoncomponent/CartIconComponent";
import CustomLink from "../customlink/CustomLink";
import Logo from "../logo/Logo";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <CustomLink to="/">
          <Logo />
        </CustomLink>
      </div>
      <div className="header-right">
        <div className="header-links">
          <CustomLink to="/">
            <span>Products</span>
          </CustomLink>
          <CustomLink to="/cart">Cart</CustomLink>
        </div>
        <div className="header-cart">
          <CustomLink to="/cart">
            <CartIconComponent itemCount={props.cartItemCount} />
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
