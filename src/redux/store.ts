import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./slices/gameSlice";
import sortReducer from "./slices/sortSlice";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    sort: sortReducer,
    //filter: filterReducer,
    //liked: likedListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
