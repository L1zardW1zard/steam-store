import styles from "./GameList.module.scss";

import axios from "axios";

import GameItem from "../GameItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { setGames } from "../../redux/slices/gameSlice";

type Data = {
  appId: string;
  title: string;
  url: string;
  imgUrl: string;
  released: string;
  reviewSummary: string;
  price: string;
};

const tempData: Data[] = [
  {
    appId: "730",
    title: "Counter-Strike: Global Offensive",
    url: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?snr=1_7_7_151_150_1",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1631908705",
    released: "21 Aug, 2012",
    reviewSummary: "Very Positive<br>88% of the 5,960,836 user reviews for this game are positive.",
    price: "                        Free to Play                    ",
  },
  {
    appId: "359550",
    title: "Tom Clancy's Rainbow Six® Siege",
    url: "https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/?snr=1_7_7_151_150_1",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_sm_120.jpg?t=1633545115",
    released: "1 Dec, 2015",
    reviewSummary: "Very Positive<br>88% of the 827,730 user reviews for this game are positive.",
    price: "                        19,99€                    ",
  },
  {
    appId: "10",
    title: "Counter-Strike",
    url: "https://store.steampowered.com/app/10/CounterStrike/?snr=1_7_7_151_150_1",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/10/capsule_sm_120.jpg?t=1602535893",
    released: "1 Nov, 2000",
    reviewSummary: "Overwhelmingly Positive<br>96% of the 110,813 user reviews for this game are positive.",
    price: "                        8,19€                    ",
  },
  {
    appId: "240",
    title: "Counter-Strike: Source",
    url: "https://store.steampowered.com/app/240/CounterStrike_Source/?snr=1_7_7_151_150_1",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/240/capsule_sm_120.jpg?t=1602536047",
    released: "1 Nov, 2004",
    reviewSummary: "Overwhelmingly Positive<br>96% of the 82,731 user reviews for this game are positive.",
    price: "                        8,19€                    ",
  },
  {
    appId: "273110",
    title: "Counter-Strike Nexon: Studio",
    url: "https://store.steampowered.com/app/273110/CounterStrike_Nexon_Studio/?snr=1_7_7_151_150_1",
    imgUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/273110/capsule_sm_120_alt_assets_8.jpg?t=1626246868",
    released: "7 Oct, 2014",
    reviewSummary: "Mixed<br>66% of the 38,993 user reviews for this game are positive.",
    price: "                        Free To Play                    ",
  },
];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
};

const GameList = () => {
  const dispatch = useAppDispatch();
  const likeditems = useAppSelector((state) => state.liked.items);

  const games = useAppSelector((state) => state.games.items) as Data[];
  const currentPage = useAppSelector((state) => state.filters.currentPage);
  const searchValue = useAppSelector((state) => state.filters.searchValue);

  useEffect(() => {
    axios
      .request({ ...options, url: `1https://steam2.p.rapidapi.com/search/${searchValue}/page/${currentPage}` })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    dispatch(setGames(tempData));
  }, [dispatch, currentPage, searchValue]);

  return (
    <div className={styles.gameList}>
      {games.map((item, index) => {
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
