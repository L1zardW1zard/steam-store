import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSort } from "../../redux/slices/sortSlice";

import styles from "./Sort.module.scss";

interface ISort {
  id: number;
  name: string;
}

const sortTypes = [
  { id: 0, name: "Price" },
  { id: 1, name: "Publish Date" },
];

const Sort = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const sort = useAppSelector((state) => state.sort);
  const dispatch = useAppDispatch();
  const sortRef = React.useRef(null);

  const onSortTypeClick = (obj: ISort) => {
    dispatch(setSort(obj));
    setPopUpOpen(false);
  };

  //   useEffect(() => {
  //     const outsideClickHandler = (e) => {
  //       if (!e.composedPath().includes(sortRef.current)) setPopUpOpen(false);
  //     };

  //     document.body.addEventListener("click", outsideClickHandler);
  //     return () => {
  //       document.body.removeEventListener("click", outsideClickHandler);
  //     };
  //   });

  return (
    <div className={styles.sort} ref={sortRef}>
      <div
        className={styles.sortLabel}
        onClick={() => {
          setPopUpOpen(!popUpOpen);
        }}
      >
        <span>{sortTypes ? sort.name : "noSortTypes"}</span>
      </div>
      {popUpOpen && (
        <div className={styles.sortPopup}>
          <ul>
            {sortTypes.map((obj, i) => {
              return (
                <li key={i} className={sort.id === i ? "active" : ""} onClick={() => onSortTypeClick(obj)}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
