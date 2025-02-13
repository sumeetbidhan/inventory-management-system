import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: linear-gradient(145deg, #007bff, #0056b3);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(145deg, #0056b3, #004494);
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }
`;

export const RemoveButton = styled(Button)`
  background: linear-gradient(145deg, #dc3545, #a71d2a);
  margin-left: 5px;

  &:hover {
    background: linear-gradient(145deg, #a71d2a, #850e1a);
  }
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  background: linear-gradient(145deg, #28a745, #1e7e34);

  &:hover {
    background: linear-gradient(145deg, #1e7e34, #155724);
  }
`;
