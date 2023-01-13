import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { setCurrentGame } from "../../redux/slices/gameSlice";
import { addLikedItem, removeLikedItem } from "../../redux/slices/LikedListSlice";

import styles from "./GameItem.module.scss";

export type GameObj = {
  appId: string;
  title: string;
  url: string;
  imgUrl: string;
  released: string;
  reviewSummary: string;
  price: string;
  inLiked?: boolean;
};

const GameItem = ({ appId, title, url, imgUrl, released, reviewSummary, price, inLiked }: GameObj) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [liked, setLiked] = useState(false);

  const onClickLike = () => {
    if (location.pathname === "/liked") {
      dispatch(removeLikedItem({ appId }));
      return;
    }
    if (!liked && !inLiked) {
      const tempItem: GameObj = {
        appId,
        title,
        url,
        imgUrl,
        released,
        reviewSummary,
        price,
        inLiked: true,
      };
      dispatch(addLikedItem(tempItem));
      setLiked(true);
    } else {
      dispatch(removeLikedItem({ appId }));
      setLiked(false);
    }
  };

  const isLiked = inLiked || liked;

  const onClickImg = () => {
    const tempItem: GameObj = {
      appId,
      title,
      url,
      imgUrl,
      released,
      reviewSummary,
      price,
      inLiked: true,
    };
    dispatch(setCurrentGame(tempItem));
  };

  return (
    <div className={styles.itemWrapper}>
      <Link
        to={`app/${appId}`}
        className={styles.moreInfoLink}
        onClick={(e) => {
          onClickImg();
        }}
      >
        <img src={imgUrl} alt="" className={styles.itemImg} />
      </Link>
      <div className={styles.gameInfo}>
        <span className={styles.itemTitle}>{title}</span>
        <p className={styles.itemReleaseDate}>{released}</p>
        <p className={styles.itemPrice}>{price}</p>
      </div>
      {isLiked && (
        <div className={styles.playBtnWrapper}>
          <a href={url} target="_blank" rel="noreferrer" className={styles.playBtn}>
            <svg width="20" height="20" viewBox="0 -1 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.10916 1.34794C4.67016 0.943374 4.12193 0.676739 3.53263 0.581177C2.94333 0.485615 2.33894 0.56534 1.79458 0.810444C1.26614 1.02421 0.813428 1.39066 0.494288 1.86299C0.175147 2.33532 0.00406912 2.89207 0.00291443 3.46211V15.5379C0.00406912 16.108 0.175147 16.6647 0.494288 17.1371C0.813428 17.6094 1.26614 17.9758 1.79458 18.1896C2.18297 18.3658 2.60436 18.4574 3.03083 18.4584C3.7993 18.455 4.53944 18.1678 5.10916 17.6521L11.6667 11.6142C11.9599 11.3456 12.1941 11.019 12.3544 10.655C12.5146 10.291 12.5973 9.8977 12.5973 9.50003C12.5973 9.10235 12.5146 8.70902 12.3544 8.34505C12.1941 7.98108 11.9599 7.65443 11.6667 7.38586L5.10916 1.34794ZM3.60416 14.1584V4.84169L8.63875 9.50003L3.60416 14.1584Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      )}

      <button
        className={styles.likeBtn}
        onClick={() => {
          onClickLike();
        }}
      >
        {isLiked ? (
          <svg width="25" height="23" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 23C13.8245 23.001 13.6506 22.9673 13.4881 22.901C13.3257 22.8346 13.1779 22.7369 13.0533 22.6133L2.69334 12.24C1.39382 10.9269 0.664886 9.15405 0.664886 7.30663C0.664886 5.4592 1.39382 3.68639 2.69334 2.37329C4.00302 1.06731 5.77711 0.333923 7.62667 0.333923C9.47623 0.333923 11.2503 1.06731 12.56 2.37329L14 3.81329L15.44 2.37329C16.7497 1.06731 18.5238 0.333923 20.3733 0.333923C22.2229 0.333923 23.997 1.06731 25.3067 2.37329C26.6062 3.68639 27.3351 5.4592 27.3351 7.30663C27.3351 9.15405 26.6062 10.9269 25.3067 12.24L14.9467 22.6133C14.8221 22.7369 14.6743 22.8346 14.5119 22.901C14.3494 22.9673 14.1755 23.001 14 23Z"
              fill="#DD1717"
            />
          </svg>
        ) : (
          <svg width="25" height="25" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7124 1.79441C10.3497 0.57241 8.56366 -0.0692986 6.73479 0.00594202C4.90592 0.0811826 3.17867 0.867427 1.92088 2.19724C0.663089 3.52705 -0.025862 5.29536 0.000742834 7.12559C0.0273477 8.95581 0.767406 10.7033 2.06332 11.996L10.0572 19.9888C10.4963 20.4277 11.0916 20.6742 11.7124 20.6742C12.3332 20.6742 12.9286 20.4277 13.3676 19.9888L21.3615 11.996C22.6575 10.7033 23.3975 8.95581 23.4241 7.12559C23.4507 5.29536 22.7618 3.52705 21.504 2.19724C20.2462 0.867427 18.5189 0.0811826 16.6901 0.00594202C14.8612 -0.0692986 13.0752 0.57241 11.7124 1.79441V1.79441ZM10.3405 3.71885L10.8848 4.262C11.1043 4.48145 11.402 4.60473 11.7124 4.60473C12.0228 4.60473 12.3205 4.48145 12.54 4.262L13.0844 3.71885C13.5163 3.27164 14.033 2.91493 14.6042 2.66953C15.1755 2.42414 15.7899 2.29497 16.4116 2.28957C17.0333 2.28416 17.6499 2.40263 18.2253 2.63807C18.8008 2.8735 19.3236 3.22117 19.7632 3.66081C20.2028 4.10045 20.5505 4.62324 20.786 5.19868C21.0214 5.77412 21.1399 6.39069 21.1345 7.01241C21.129 7.63412 20.9999 8.24854 20.7545 8.8198C20.5091 9.39106 20.1524 9.90773 19.7052 10.3397L11.7124 18.3336L3.71969 10.3397C2.86677 9.45657 2.39482 8.2738 2.40548 7.04611C2.41615 5.81841 2.90859 4.64403 3.77673 3.77589C4.64487 2.90774 5.81926 2.41531 7.04695 2.40464C8.27464 2.39397 9.45741 2.86592 10.3405 3.71885V3.71885Z"
              fill="white"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default GameItem;
