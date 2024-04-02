import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;

export const selectNameFilter = state => {
  const searchTerm = state.filters.name.toLowerCase().trim();

  if (!searchTerm) {
    return state.contacts.items;
  }

  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm)
  );
};
