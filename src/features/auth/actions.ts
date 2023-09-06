import { actions } from './authSlice';
import { AppDispatch } from '../../store/store';
import UserService from "../../api/UserService";
import { IUser } from "../../models/IUser";
import { IEvent } from "../../models/IEvent";

export function login(username: string, password: string) {
  return async (dispatch: AppDispatch):Promise<void> => {
    try {
      dispatch(actions.setIsLoading(true));
      setTimeout(async () => {
        const response = await UserService.getUsers()
        const mockUser = response.data.find(user => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(actions.setUser(mockUser));
          dispatch(actions.setIsAuth(true))
        } else {
          dispatch(actions.setError('Некорректный логин или пароль'));
        }
        dispatch(actions.setIsLoading(false));
      }, 1000)
    } catch (e) {
      dispatch(actions.setError('Произошла ошибка при логине'))
    }
  }
}

export function logout() {
  return async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(actions.setUser({} as IUser));
        dispatch(actions.setIsAuth(false))
  }
}