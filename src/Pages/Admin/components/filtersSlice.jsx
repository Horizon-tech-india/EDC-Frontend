import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      addFilter: (state, action) => {
        state.push(action.payload);
      },
      removeFilter: (state, action) => {
        const index = state.findIndex(
          (filter) => filter === action.payload
        );
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  
  export const { addFilter, removeFilter } = filtersSlice.actions;
  
  export const selectFilters = (state) => state.filters;
  
  export default filtersSlice.reducer;
  