import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ProductContainer, Button } from "../styles/ProductStyles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </ProductContainer>
  );
};

export default ProductCard;
