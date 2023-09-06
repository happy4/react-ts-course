import { createSlice } from '@reduxjs/toolkit';
import { IUser } from "../../models/IUser";
import { IEvent } from "../../models/IEvent";

interface EventState {
  guests: IUser[];
  events: IEvent[];
}

const initialState: EventState = {
  events: [],
  guests: []
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setGuests: (state, { payload }) => {
      state.guests = payload;
    },
    setEvents: (state, { payload }) => {
      state.events = payload;
    }
  }
});

export const actions = eventSlice.actions;
export default eventSlice.reducer;
