import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import jsonData from './stackline_frontend_assessment_data_2021.json'
import Header from './Header/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate an API call
    dispatch(setProducts(jsonData));
  }, [dispatch])

  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App;
