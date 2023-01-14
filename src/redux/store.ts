import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/gameSlice";
import filterReducer from "./slices/filterSlice";
import likedListReducer from "./slices/LikedListSlice";
import { loadState } from "../localStorage";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filters: filterReducer,
    liked: likedListReducer,
    preloadedState: loadState(),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
