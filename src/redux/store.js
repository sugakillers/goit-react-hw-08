import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice.js';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});