import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import {
  CartContainer,
  CartItem,
  CartItemInfo,
  QuantityControls,
  Button,
  RemoveButton,
  CheckoutButton
} from "../styles/CartStyles";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemInfo>
                <img src={item.image} alt={item.title} width="50" />
                <div>
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
              </CartItemInfo>
              <QuantityControls>
                <Button onClick={() => dispatch(decrementQuantity(item.id))}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => dispatch(incrementQuantity(item.id))}>+</Button>
              </QuantityControls>
              <RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>Remove</RemoveButton>
            </CartItem>
          ))}
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <Link to="/checkout">
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
          </Link>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
