// Products.jsx
import React from 'react';
import { useFetchProducts } from './hooks'; // Update the path as needed

const Products = ({ category }) => {
  const products = useFetchProducts(category);

  return (
    <div>
      <h2>{category} Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
