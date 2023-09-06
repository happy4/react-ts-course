import { createSlice } from '@reduxjs/toolkit';
import {IUser} from "../../models/IUser";

interface AuthState {
  isAuth: boolean;
  error: string;
  isLoading: boolean;
  user: IUser
}

const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as IUser
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, { payload }) => {
      state.isAuth = payload;
      state.isLoading = false;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    }
  }
});

export const actions = authSlice.actions;
export default authSlice.reducer;
