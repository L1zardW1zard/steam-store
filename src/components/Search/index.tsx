import React, { useState } from "react";

import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { useAppDispatch } from "../../hooks";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 1000),
    []
  );

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    updateSearchValue(e.currentTarget.value);
  };

  React.useEffect(() => {}, [value]);

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.search}
        placeholder="Enter an app name..."
        onChange={(e) => onInputChange(e)}
        value={value}
      ></input>
      <svg
        className={styles.searchImg}
        width="23"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.20618 2.30023C7.37496 2.30023 5.61874 3.02768 4.32387 4.32255C3.029 5.61742 2.30155 7.37364 2.30155 9.20487C2.30155 11.0361 3.029 12.7923 4.32387 14.0872C5.61874 15.3821 7.37496 16.1095 9.20618 16.1095C11.0374 16.1095 12.7936 15.3821 14.0885 14.0872C15.3834 12.7923 16.1108 11.0361 16.1108 9.20487C16.1108 7.37364 15.3834 5.61742 14.0885 4.32255C12.7936 3.02768 11.0374 2.30023 9.20618 2.30023ZM5.68669e-08 9.20487C0.000209816 7.73977 0.350086 6.29588 1.02055 4.9932C1.69102 3.69052 2.66271 2.56667 3.85486 1.71504C5.04702 0.863421 6.42522 0.308625 7.87492 0.0967641C9.32461 -0.115097 10.8039 0.0220958 12.1899 0.49694C13.576 0.971784 14.8286 1.77057 15.8438 2.8269C16.8591 3.88323 17.6075 5.16661 18.027 6.57037C18.4464 7.97414 18.5248 9.45774 18.2556 10.8979C17.9864 12.338 17.3773 13.6931 16.4791 14.8506L22.6783 21.0498C22.8879 21.2668 23.0039 21.5575 23.0013 21.8592C22.9987 22.161 22.8776 22.4496 22.6643 22.6629C22.4509 22.8763 22.1623 22.9973 21.8605 23C21.5588 23.0026 21.2681 22.8866 21.0511 22.677L14.8519 16.4777C13.491 17.5343 11.861 18.1877 10.1472 18.3638C8.43345 18.54 6.70462 18.2316 5.15736 17.4739C3.61009 16.7163 2.30648 15.5396 1.39477 14.0778C0.483047 12.616 -0.000191397 10.9277 5.68669e-08 9.20487Z"
          fill="#0D0D0D"
        />
      </svg>
    </div>
  );
};

export default Search;
