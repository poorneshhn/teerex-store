import { Link } from "react-router-dom";

const CustomLink = ({ to = "/", children }) => {
  return (
    <Link style={{ textDecoration: "none", color: "inherit" }} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
