import React, { useState } from 'react';
import './Products.css';

function Products() {
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Wireless workout headphones",
      price: 200000,
      description: "Wireless headphones",
      category: "Sports"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 700000,
      description: "Latest smartphone",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Speaker",
      price: 120000,
      description: "Audible Speaker",
      category: "Electronics"
    },
    {
      id: 4,
      name: "Coffee Maker",
      price: 500000,
      description: "Automatic coffee maker",
      category: "Home"
    }
  ];
  
  const showProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      
      <div className="filter">
        <label>Show: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Products</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Home">Home</option>
        </select>
      </div>
      
      <div className="products-list">
        {showProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            <p><strong>Price:</strong> UGX {product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {showProducts.length === 0 && (
        <p>No products in this category.</p>
      )}
    </div>
  );
}

export default Products;