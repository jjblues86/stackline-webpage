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
        const response = await fetch('stackline-webpage/src/stackline_frontend_assessment_data_2021.json');
        if (!response.ok) {
            throw new Error('Failed to fetch products: ' + response.status);
        }
        const products = await response.json();
        dispatch(fetchProductsSuccess(products));
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Failed to fetch products:', error.message);
            dispatch(fetchProductsFailure(error.message));  
        } else {
            console.error('An unexpected error occurred');
            dispatch(fetchProductsFailure('An unexpected error occurred'));
        }
    }
};
