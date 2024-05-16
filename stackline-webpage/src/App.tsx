import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import jsonData from './stackline_frontend_assessment_data_2021.json';
import Header from './Header/Header';
import { fetchProductsSuccess } from './store/dataSlice';
import { Product } from './types/productTypes';
import ProductDetails from './ProductDetails/ProductDetails';
import SalesGraph from './Sales/SalesGraph';
import SalesTable from './Sales/SalesTable';
import { MainContainer, Content } from './ProductDetails/ProductStyles';

// Business logic for data preparation

const App = () => {
  const dispatch = useDispatch();
  const firstProduct = jsonData[0] as Product;
  const salesData = jsonData.map(product => product.sales).flat();

  useEffect(() => {
    dispatch(fetchProductsSuccess(jsonData)); 
  }, [dispatch]);

  return (
    <>
      <Header />
      <MainContainer>
        <ProductDetails product={firstProduct} />
        <Content>
          <SalesGraph data={firstProduct.sales} />
          <SalesTable data={salesData} />
        </Content>
      </MainContainer>
    </>
  );
};

export default App;
