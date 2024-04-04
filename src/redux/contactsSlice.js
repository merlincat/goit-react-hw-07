import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts } from './contactsOps';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: newContact => {
        return {
          payload: {
            ...newContact,
            id: nanoid(4),
          },
        };
      },
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;

// додавати id тут
// addContact(state, action) {
//       state.items.push(action.payload);
//     },
