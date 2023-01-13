import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSort, setSortOrder } from "../../redux/slices/filterSlice";

import styles from "./Sort.module.scss";

interface ISort {
  id: number;
  name: string;
}

const sortTypes = [
  { id: 0, name: "Price" },
  { id: 1, name: "Publish Date" },
];

const sortOrder = ["Lower to bigger", "Bigger to lower"];

const Sort = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [orderPopUpOpen, setOrderPopUpOpen] = useState(false);
  const sort = useAppSelector((state) => state.filters.sort);
  const dispatch = useAppDispatch();
  const sortRef = React.useRef(null);

  const onSortTypeClick = (obj: ISort) => {
    dispatch(setSort(obj));
    setPopUpOpen(false);
  };

  const onSortOrderClick = (value: string) => {
    dispatch(setSortOrder(value));
    setOrderPopUpOpen(false);
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
    <>
      <div className={styles.sortOrder}>
        <button
          className={styles.sortOrderBtn}
          onClick={() => {
            setOrderPopUpOpen(!orderPopUpOpen);
          }}
        >
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.7064 8.17668C22.869 8.17904 22.0528 8.44035 21.3698 8.92479C20.6867 9.40924 20.1702 10.0931 19.8911 10.8826H2.0589C1.70007 10.8826 1.35594 11.0252 1.10221 11.2789C0.848477 11.5326 0.705933 11.8768 0.705933 12.2356C0.705933 12.5944 0.848477 12.9386 1.10221 13.1923C1.35594 13.446 1.70007 13.5886 2.0589 13.5886H19.8911C20.1393 14.2906 20.5758 14.9108 21.1529 15.3814C21.73 15.8519 22.4254 16.1546 23.163 16.2564C23.9007 16.3582 24.6521 16.2551 25.335 15.9584C26.018 15.6617 26.6062 15.1829 27.0352 14.5743C27.4643 13.9658 27.7176 13.2509 27.7676 12.5079C27.8176 11.765 27.6622 11.0227 27.3185 10.3621C26.9748 9.70156 26.4561 9.14828 25.819 8.76282C25.1819 8.37737 24.4511 8.17459 23.7064 8.17668ZM23.7064 13.5886C23.4389 13.5886 23.1773 13.5092 22.9548 13.3606C22.7323 13.2119 22.5589 13.0006 22.4565 12.7534C22.3541 12.5061 22.3273 12.2341 22.3795 11.9716C22.4317 11.7092 22.5605 11.4681 22.7497 11.2789C22.939 11.0897 23.18 10.9608 23.4425 10.9086C23.7049 10.8564 23.977 10.8832 24.2242 10.9856C24.4714 11.088 24.6827 11.2614 24.8314 11.4839C24.9801 11.7064 25.0594 11.968 25.0594 12.2356C25.0594 12.5944 24.9169 12.9386 24.6631 13.1923C24.4094 13.446 24.0653 13.5886 23.7064 13.5886Z"
              fill="#231F20"
            />
            <path
              d="M2.0589 5.47076H3.65541C3.93981 6.25433 4.45857 6.93134 5.1412 7.40978C5.82382 7.88821 6.6372 8.14487 7.47079 8.14487C8.30438 8.14487 9.11776 7.88821 9.80038 7.40978C10.483 6.93134 11.0018 6.25433 11.2862 5.47076H26.4124C26.7712 5.47076 27.1154 5.32821 27.3691 5.07448C27.6228 4.82075 27.7654 4.47662 27.7654 4.11779C27.7654 3.75896 27.6228 3.41482 27.3691 3.16109C27.1154 2.90736 26.7712 2.76481 26.4124 2.76481H11.2862C11.0018 1.98124 10.483 1.30423 9.80038 0.825792C9.11776 0.347356 8.30438 0.0906982 7.47079 0.0906982C6.6372 0.0906982 5.82382 0.347356 5.1412 0.825792C4.45857 1.30423 3.93981 1.98124 3.65541 2.76481H2.0589C1.70007 2.76481 1.35594 2.90736 1.10221 3.16109C0.848477 3.41482 0.705933 3.75896 0.705933 4.11779C0.705933 4.47662 0.848477 4.82075 1.10221 5.07448C1.35594 5.32821 1.70007 5.47076 2.0589 5.47076ZM7.47079 2.76481C7.73838 2.76481 7.99997 2.84417 8.22246 2.99283C8.44496 3.1415 8.61837 3.3528 8.72077 3.60003C8.82318 3.84725 8.84997 4.11929 8.79776 4.38174C8.74556 4.64419 8.6167 4.88526 8.42748 5.07448C8.23827 5.2637 7.99719 5.39256 7.73474 5.44476C7.47229 5.49696 7.20025 5.47017 6.95303 5.36777C6.70581 5.26537 6.4945 5.09195 6.34584 4.86946C6.19717 4.64696 6.11782 4.38538 6.11782 4.11779C6.11782 3.75896 6.26036 3.41482 6.51409 3.16109C6.76783 2.90736 7.11196 2.76481 7.47079 2.76481Z"
              fill="#231F20"
            />
            <path
              d="M26.4124 19.0005H16.6981C16.4137 18.2169 15.8949 17.5399 15.2123 17.0614C14.5296 16.583 13.7163 16.3263 12.8827 16.3263C12.0491 16.3263 11.2357 16.583 10.5531 17.0614C9.87046 17.5399 9.3517 18.2169 9.0673 19.0005H2.0589C1.70007 19.0005 1.35594 19.143 1.10221 19.3967C0.848477 19.6505 0.705933 19.9946 0.705933 20.3534C0.705933 20.7123 0.848477 21.0564 1.10221 21.3101C1.35594 21.5639 1.70007 21.7064 2.0589 21.7064H9.0673C9.3517 22.49 9.87046 23.167 10.5531 23.6454C11.2357 24.1239 12.0491 24.3805 12.8827 24.3805C13.7163 24.3805 14.5296 24.1239 15.2123 23.6454C15.8949 23.167 16.4137 22.49 16.6981 21.7064H26.4124C26.7712 21.7064 27.1154 21.5639 27.3691 21.3101C27.6228 21.0564 27.7654 20.7123 27.7654 20.3534C27.7654 19.9946 27.6228 19.6505 27.3691 19.3967C27.1154 19.143 26.7712 19.0005 26.4124 19.0005ZM12.8827 21.7064C12.6151 21.7064 12.3535 21.627 12.131 21.4784C11.9085 21.3297 11.7351 21.1184 11.6327 20.8712C11.5303 20.624 11.5035 20.3519 11.5557 20.0895C11.6079 19.827 11.7368 19.5859 11.926 19.3967C12.1152 19.2075 12.3563 19.0787 12.6187 19.0265C12.8812 18.9742 13.1532 19.001 13.4004 19.1034C13.6477 19.2058 13.859 19.3793 14.0076 19.6018C14.1563 19.8243 14.2356 20.0858 14.2356 20.3534C14.2356 20.7123 14.0931 21.0564 13.8394 21.3101C13.5856 21.5639 13.2415 21.7064 12.8827 21.7064Z"
              fill="#231F20"
            />
          </svg>
        </button>

        {orderPopUpOpen && (
          <div className={styles.orderPopUp}>
            <ul>
              {sortOrder.map((value, i) => {
                return (
                  <li key={i} className={sort.id === i ? "active" : ""} onClick={() => onSortOrderClick(value)}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

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
    </>
  );
};

export default Sort;
