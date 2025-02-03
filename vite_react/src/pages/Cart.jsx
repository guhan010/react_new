import React from "react";

const Cart = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Cart items</h1>
      {products.map((ele, index) => {
        return (
          <div
            key={ele.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "grey",
              marginBottom: "30px",
            }}
          >
            <h2>Product: {ele.name}</h2>
            <h4>Price: {ele.price}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
