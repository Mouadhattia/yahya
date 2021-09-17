import { configureStore } from '@reduxjs/toolkit';

import tazzaReducer from '../features/tazzaSlice';



export const store = configureStore({
  reducer: {
    mou3adh:tazzaReducer,
   
  },
});
