import { createSlice } from "@reduxjs/toolkit";
//import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IGameSlice {
  items: [];
  page: number;
}

const initialState: IGameSlice = {
  items: [],
  page: 1,
};

// export const fetchGames = createAsyncThunk(
//   "pizza/fetchPizzasStatus",
//   async ({ currentPage, itemsPerPageLimit, sort, categoryId, searchValue }) => {
//     const { data } = await axios.get(
//       `https://62a85c0a943591102ba00145.mockapi.io/items?page=${currentPage}&limit=${itemsPerPageLimit}&order=${
//         sort.order
//       }&sortBy=${sort.sortName}${categoryId > 0 ? `&category=${categoryId}` : ``}${
//         searchValue ? "&search=" + searchValue : ""
//       }`
//     );
//     return data;
//   }
// );

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames(state, action) {
      state.items = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: {
    // [fetchGames.fulfilled]: (state, action) => {
    //   state.items = action.payload;
    //   state.status = "success";
    // },
    // [fetchGames.pending]: (state) => {
    //   state.status = "loading";
    //   state.items = [];
    // },
    // [fetchGames.rejected]: (state) => {
    //   state.status = "error";
    //   state.items = [];
    // },
  },
});

export const { setGames, setPage } = gameSlice.actions;

export const selectGames = (state: RootState) => state.games;

export default gameSlice.reducer;
