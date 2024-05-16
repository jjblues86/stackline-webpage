import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import jsonData from './stackline_frontend_assessment_data_2021.json'
import Header from './Header/Header';
import { fetchProductsSuccess } from './store/dataSlice';
import { Product } from './types/productTypes';
import ProductDetails from './ProductDetails/ProductDetails';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const webProducts : Product[] = jsonData.map((item: any) => ({
      ...item,
    }))
    dispatch(fetchProductsSuccess(webProducts));
  }, [dispatch])

  const firstProduct = jsonData[0] as Product;

  return (
    <div className='App'>
      <Header />

      <ProductDetails product={firstProduct} />
    </div>
  )
}

export default App;
