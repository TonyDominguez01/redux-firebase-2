import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import userSlice from '../features/userSlice';
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    user: userReducer
  },
});
