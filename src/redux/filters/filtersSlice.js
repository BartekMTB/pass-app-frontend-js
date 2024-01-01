import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
