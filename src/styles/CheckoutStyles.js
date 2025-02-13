import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TotalAmount = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

export const Button = styled.button`
  background: linear-gradient(145deg, #28a745, #1e7e34);
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(145deg, #1e7e34, #155724);
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }
`;
