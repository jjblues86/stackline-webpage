import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store'; 
import { DataState, Product } from '../types/productTypes';

const initialState: DataState = {
    products: [],
    loading: false,
    error: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchProductsStart(state) {
            state.loading = true;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchProductsFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = dataSlice.actions;

export default dataSlice.reducer;

// Asynchronous thunk action
export const fetchProducts = (): AppThunk => async dispatch => {
    try {
        dispatch(fetchProductsStart());
        const response = await fetch('/path/to/your/products.json');
        const products = await response.json();
        dispatch(fetchProductsSuccess(products));
    } catch (error) {
        dispatch(fetchProductsFailure(error.toString()));
    }
};
