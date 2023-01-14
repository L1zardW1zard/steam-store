import { createSlice } from "@reduxjs/toolkit";
import { GameObj } from "../../components/GameItem";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
};

interface IGameSlice {
  items: GameObj[];
  currentGame: null | GameObj;
  page: number;
  status: "loading" | "success" | "error";
}

type fetchType = {
  currentPage: number;
  searchValue: string;
};

const initialState: IGameSlice = {
  items: [],
  currentGame: null,
  page: 1,
  status: "success",
};

export const fetchGames = createAsyncThunk<GameObj[], fetchType, { rejectValue: string }>(
  "games/fetchGames",
  async function ({ currentPage, searchValue }) {
    const { data } = await axios.get(
      `1https://steam2.p.rapidapi.com/search/${searchValue}/page/${currentPage}`,
      options
    );

    return data as GameObj[];
  }
);

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames(state, action) {
      state.items = action.payload;
    },
    setCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setGames, setPage, setCurrentGame } = gameSlice.actions;

export const selectGames = (state: RootState) => state.games;

export default gameSlice.reducer;
