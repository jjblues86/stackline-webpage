import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import jsonData from './stackline_frontend_assessment_data_2021.json'
import Header from './Header/Header';
import { fetchProductsSuccess } from './store/dataSlice';
import { Product } from './types/productTypes';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const webProducts : Product[] = jsonData.map((item: any) => ({
      ...item,
    }))
    dispatch(fetchProductsSuccess(webProducts));
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App;
