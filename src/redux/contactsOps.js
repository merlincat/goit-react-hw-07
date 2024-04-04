// fetchContacts;
// Базовий тип екшену це рядок "contacts/fetchAll".

// addContact;
// Базовий тип екшену це рядок "contacts/addContact".

// deleteContact;
// Базовий тип екшену це рядок "contacts/deleteContact".

// Обробку усіх трьох екшенів (fulfilled, rejected, pending) та зміну даних у стані Redux зроби у властивості extraReducers слайсу контактів, а от властивість reducers з нього — прибери.
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://660c485d3a0766e85dbdd5a9.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
