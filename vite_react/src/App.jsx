// import Navbar from "./Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Kids from "./pages/Kids";
// import Men from "./pages/Men";

// import Cart from "./pages/Cart";
// import Products from "./pages/Products";
// import { useState } from "react";

// function App() {
//   const [cart, setCart] = useState([]);

//   function addToCart(a) {
//     setCart([...cart, a]);
//   }

//   return (
//     <>
//       <Navbar cartCount={cart.length} />
//       {/* <Parent /> */}
//       <Routes>
//         {/* <Route path="/" Component={Temperature} /> */}
//         <Route path="/home" Component={Home} />
//         <Route path="/men" Component={Men} />
//         <Route path="/kids" Component={Kids} />
//         <Route path="/cart" element={<Cart products={cart} />} />
//         <Route path="/products" element={<Products addtocart={addToCart} />} />
//       </Routes>
//     </>
//   );
// }
// export default App;
import React, { useState } from "react";
import Effect from "./Effect";
import Data from "./Data";

const App = () => {
  const [visible, setVisible] = useState(true);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <div>
      {/* App compoenent <div>{visible ? <Effect /> : "hello"}</div>
      <button onClick={toggle}>{visible ? "umount" : "mount"}</button> */}
      <Data />
    </div>
  );
};

export default App;
