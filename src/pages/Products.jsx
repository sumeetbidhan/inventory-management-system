import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { ProductsGrid, PageContainer } from "../styles/ProductStyles";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <PageContainer>
      <h2>Product Listing</h2>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </PageContainer>
  );
};

export default Products;
