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
import React, { createContext, useRef } from "react";
import Parent from "./components/Parent";
// import Crud from "./Crud";
export let MoneyContext = createContext();

const App = () => {
  const divbox = useRef(null);
  const amount = 1000;
  const animate = () => {
    divbox.current.style.width = "150px";
    divbox.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <div
        ref={divbox}
        style={{ width: "100px", height: "100px", backgroundColor: "green" }}
      >
        .
      </div>
      <button onClick={animate}>Animate</button>
      {/* App compoenent <div>{visible ? <Effect /> : "hello"}</div>
      <button onClick={toggle}>{visible ? "umount" : "mount"}</button> */}
      {/* <Crud />
      <MoneyContext.Provider value={amount}>
        <Parent />
      </MoneyContext.Provider> */}
    </div>
  );
};

export default App;
