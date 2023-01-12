import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IsortSlice {
  name: string;
  id: number;
  order: string;
}

const initialState: IsortSlice = {
  id: 0,
  name: "Price",
  order: "desc",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;

export const selectSort = (state: RootState) => state.sort;

export default sortSlice.reducer;
