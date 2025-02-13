import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed; /* Fixes navbar at the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => (props.darkMode ? "#333" : "#f8f9fa")};
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;

export const ToggleButton = styled.button`
  border: none;
  padding: 10px 18px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(145deg, #ffa801, #ff7f00);
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(145deg, #ff7f00, #ff6b00);
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const NavButton = styled.div`
  position: relative;
  padding: 12px 18px;
  background: linear-gradient(145deg, #ffa801, #ff7f00);
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(145deg, #ff7f00, #ff6b00);
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const CartDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  background-color: #a29bfe;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;
  z-index: 10;

  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  img {
    border-radius: 5px;
    margin-right: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  .checkout-btn {
    display: block;
    background: linear-gradient(145deg, #00b894, #00a36c);
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    transition: all 0.3s ease;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

    &:hover {
      background: linear-gradient(145deg, #00a36c, #00965e);
      transform: translateY(-2px);
      box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
    }

    &:active {
      transform: translateY(2px);
      box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    }
  }
`;
