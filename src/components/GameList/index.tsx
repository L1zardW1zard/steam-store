import React from "react";

import styles from "./GameList.module.scss";

import GameItem from "../GameItem";

type Data = {
  appId: string;
  title: string;
  url: string;
  imgUrl: string;
  released: string;
  reviewSummary: string;
  price: string;
};

const GameList = () => {
  const data: Data[] = [
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

  return (
    <div className={styles.gameList}>
      {data.map((item, index) => {
        return (
          <GameItem
            appId={item.appId}
            title={item.title}
            url={item.appId}
            imgUrl={item.imgUrl}
            released={item.released}
            reviewSummary={item.reviewSummary}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default GameList;
