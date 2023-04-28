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
        // console.log(action.payload)
        // console.log(state);

        const toDelete = action.payload;
        console.log(toDelete);
        const index = state.findIndex(
          (filter) => filter.id === toDelete
        );
        console.log(index);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
    },
  });
  
  export const { addFilter, removeFilter } = filtersSlice.actions;
  
  export const selectFilters = (state) => state.filters;
  
  export default filtersSlice.reducer;
  