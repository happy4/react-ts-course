import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../features/auth/authSlice';
import { eventSlice } from '../features/event/eventSlice';
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  event: eventSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;