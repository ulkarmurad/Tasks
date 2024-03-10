// hooks.js
import { useState, useEffect } from 'react';

const fetchData = async (category) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
	 console.log(data);
    return data;
	
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const useFetchProducts = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(category);
        setProducts(data);
      } catch (error) {
        // Handle errors as needed
      }
    };

    fetchDataAsync();
  }, [category]);

  return products;
};

export { useFetchProducts };
