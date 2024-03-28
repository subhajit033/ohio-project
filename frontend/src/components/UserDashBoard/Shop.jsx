import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
const Shop = () => {
  const [products, setProducts] = useState(null);
  // const[loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      // setLoading(true);
      const data = await axios.get('/api/v1/products');
      console.log(data);
      // setLoading(fa)
      setProducts(data?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return !products ? (
    <Loader />
  ) : (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:h-[89vh] overflow-auto">
      {products.map((pdt) => (
        <ProductCard key={pdt._id} {...pdt} />
      ))}
    </div>
  );
};

export default Shop;
