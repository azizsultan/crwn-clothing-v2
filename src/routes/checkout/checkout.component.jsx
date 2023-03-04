import { useContext } from "react";

import "./checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotalCost } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => {
        return (
          <>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            {/* <h2>{cartItem.name}</h2>
            <span>{cartItem.quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span> */}
          </>
        );
      })}
      <span className="total">Total: {cartTotalCost}</span>
    </div>
  );
};

export default Checkout;
