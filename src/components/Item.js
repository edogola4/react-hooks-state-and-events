import React, { useState } from "react";


function Item({ name, category }) {

  const [ isInCart, setIsInCart ] = useState(false); // state to track if the item is in the cart

  const handleCartToggle = () => {
    setIsInCart((prevState) => !prevState) // toggle the cart state
  };


  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
