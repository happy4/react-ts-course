import { actions } from './eventSlice';
import { AppDispatch } from '../../store/store';
import UserService from "../../api/UserService";
import { IEvent } from "../../models/IEvent";

export function fetchGuests() {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(actions.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  }
}

export function createEvent(event: IEvent) {
  return async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || '[]'
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(actions.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e)
    }
  }
}

export function fetchEvents(username: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || '[]'
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
      dispatch(actions.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e)
    }
  }
}

