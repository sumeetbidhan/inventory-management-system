import styled from "styled-components";

export const ProductContainer = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  background: linear-gradient(145deg, #ff6b6b, #ff4757);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.1);

  &:hover {
    background: linear-gradient(145deg, #ff4757, #ff3f34);
    transform: translateY(-2px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: inset 4px 4px 6px rgba(0, 0, 0, 0.2), inset -4px -4px 6px rgba(255, 255, 255, 0.1);
  }
`;


export const PageContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px 0;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;