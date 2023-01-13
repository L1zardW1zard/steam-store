import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../components/GameItem";
import type { RootState } from "../store";

interface ILikedList {
  items: Item[];
}

const initialState: ILikedList = {
  items: [],
};

export const likedList = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLikedItem(state, action) {
      const foundItem = state.items.find((obj: Item) => {
        if (obj.appId === action.payload.appId) {
          return obj;
        } else {
          return null;
        }
      });

      if (foundItem) {
        return;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeLikedItem(state, action) {
      const foundItem = state.items.find((obj) => {
        if (obj.appId === action.payload.appId) {
          return obj;
        }
        return null;
      });

      state.items = state.items.filter((obj) => obj !== foundItem);
    },
  },
});

export const { addLikedItem, removeLikedItem } = likedList.actions;

export const selectGames = (state: RootState) => state.liked;

export default likedList.reducer;
