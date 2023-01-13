import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IFilterSlice {
  searchValue: string;
  currentPage: number;
  sort: {
    id: number;
    name: string;
    order: {
      id: number;
      name: string;
    };
  };
}

const initialState: IFilterSlice = {
  searchValue: "",
  currentPage: 1,
  sort: {
    id: 0,
    name: "Price",
    order: {
      id: 0,
      name: "Lower to bigger",
    },
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort.name = action.payload.name;
      state.sort.id = action.payload.id;
    },
    setSortOrder(state, action) {
      state.sort.order.name = action.payload.value;
      state.sort.order.id = action.payload.id;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { setSort, setSortOrder, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filters;

export default filterSlice.reducer;
