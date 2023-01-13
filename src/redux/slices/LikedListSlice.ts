import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ILikedList {
  items: [];
}

const initialState: ILikedList = {
  items: [],
};

export const likedList = createSlice({
  name: "liked",
  initialState,
  reducers: {
    setLikedItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setLikedItems } = likedList.actions;

export const selectGames = (state: RootState) => state.liked;

export default likedList.reducer;
