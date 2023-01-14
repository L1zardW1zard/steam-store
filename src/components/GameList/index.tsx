import styles from "./GameList.module.scss";

import GameItem, { GameObj } from "../GameItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchGames, setGames } from "../../redux/slices/gameSlice";

type Props = {
  pageOffset: number;
  itemsPerPage: number;
};

const GameList = ({ pageOffset, itemsPerPage }: Props) => {
  const dispatch = useAppDispatch();
  const likeditems = useAppSelector((state) => state.liked.items);

  const games = useAppSelector((state) => state.games.items) as GameObj[];
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const searchValue = useAppSelector((state) => state.filters.searchValue);
  const sort = useAppSelector((state) => state.filters.sort);

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchGames({ currentPage, searchValue }));
    }
  }, [dispatch, currentPage, searchValue]);

  useEffect(() => {
    let temp = [...games];
    if (sort.name === "Price") {
      temp.sort(function (a, b) {
        return Number(b.price.replace(/\D/g, "")) - Number(a.price.replace(/\D/g, ""));
      });
    }

    if (sort.name === "Publish Date") {
      temp
        .sort(function (a, b) {
          return new Date(b.released).getTime() - new Date(a.released).getTime();
        })
        .reverse();
    }

    if (sort.order.name === "Lower to bigger") {
      dispatch(setGames(temp.reverse()));
    } else if (sort.order.name === "Bigger to lower") {
      dispatch(setGames(temp));
    }
  }, [dispatch, sort, searchValue]);

  return (
    <div className={styles.gameList}>
      {games.slice(currentPage * pageOffset, currentPage * pageOffset + itemsPerPage).map((item, index) => {
        let liked = false;
        likeditems.forEach((likedItem) => {
          if (likedItem.appId === item.appId) {
            liked = true;
          }
        });

        const tempItem = { ...item, inLiked: liked };

        return <GameItem {...tempItem} key={item.appId} />;
      })}
    </div>
  );
};

export default GameList;
