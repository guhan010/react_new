import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar({ cartCount }) {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/men">Men</NavLink>
        </li>
        <li>
          <NavLink to="/kids">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart ({cartCount})</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
