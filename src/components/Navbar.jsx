import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavbarContainer, NavButton, CartDropdown, ToggleButton, ButtonGroup } from "../styles/NavbarStyles";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [darkMode, setDarkMode] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <NavbarContainer darkMode={darkMode}>
      <ToggleButton onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </ToggleButton>

      <ButtonGroup>
        <NavButton>
          <Link to="/">🛒 Products</Link>
        </NavButton>

        <NavButton onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
          <Link to="/cart">🛍️ Cart ({cartItems.length})</Link>

          {showCart && (
            <CartDropdown>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} width="40" />
                    <div>
                      <p>{item.title}</p>
                      <p>${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
              <Link to="/cart" className="checkout-btn">View Cart</Link>
            </CartDropdown>
          )}
        </NavButton>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
