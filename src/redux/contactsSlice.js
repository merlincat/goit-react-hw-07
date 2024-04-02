import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
});

export const { deleteContact, addContact } = slice.actions;
export default slice.reducer;

// додавати id тут
// addContact(state, action) {
//       state.items.push(action.payload);
//     },
