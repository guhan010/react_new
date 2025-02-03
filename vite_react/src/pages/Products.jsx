import React from "react";

const Products = ({ addtocart }) => {
  const productsarr = [
    { id: 1, name: "laptop", price: 2345432 },
    { id: 2, name: "mobile", price: 98767 },
    { id: 3, name: "earphones", price: 5660 },
  ];

  return (
    <div>
      <h1>Products</h1>
      {productsarr.map((ele, index) => {
        return (
          <div
            key={ele.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "beige",
              marginBottom: "30px",
            }}
          >
            <h2>Product: {ele.name}</h2>
            <h4>Price: {ele.price}</h4>
            <h5>
              <button
                onClick={() => {
                  addtocart(ele);
                }}
              >
                Add to Cart
              </button>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
