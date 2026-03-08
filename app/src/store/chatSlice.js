import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    rooms: [],
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addRoom: (state, action) => {
      const room = action.payload;
      if (!state.rooms.find((r) => r === room)) {
        state.rooms.push(room);
      }
    },
  },
});

export const { addMessage, addRoom } = chatSlice.actions;
export default chatSlice.reducer;
