import React from "react";
import { useSelector } from "react-redux";
import { CheckoutContainer, TotalAmount, Button } from "../styles/CheckoutStyles";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <TotalAmount>Total Amount: ${totalAmount.toFixed(2)}</TotalAmount>
      <Button onClick={() => alert("Order placed successfully!")}>Place Order</Button>
    </CheckoutContainer>
  );
};

export default Checkout;
