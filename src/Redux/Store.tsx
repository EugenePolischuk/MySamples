import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/AuthSlice';

export default configureStore({
  reducer: {
    auth: authReducer
  }
});
