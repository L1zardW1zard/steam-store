import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./GameDetails.module.scss";

import axios from "axios";

import { GameObj } from "../../components/GameItem";
import { useAppSelector } from "../../hooks";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "steam2.p.rapidapi.com",
  },
};

const GameDetails = () => {
  const params = useParams(); // params.id
  const currentGame: GameObj | null = useAppSelector((state) => state.games.currentGame);

  useEffect(() => {
    if (currentGame) {
      return;
    }
    if (params.id) {
      axios
        .request({ ...options, url: `https://steam2.p.rbapidapi.com/appDetail/${params.id}` })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [params.id, currentGame]);

  return (
    <>
      <img src={currentGame?.imgUrl} alt="" className={styles.Img} />
      <h1 className={styles.gameTitle}>{currentGame?.title}</h1>
      <p className={styles.gameInfo}>Released: {currentGame?.released}</p>
      <p className={styles.gameInfo}>
        Review Summary: {currentGame?.reviewSummary && currentGame?.reviewSummary.replace("<br>", ", ")}
      </p>
      <p className={styles.gameInfo}>Price: {currentGame?.price}</p>
    </>
  );
};

export default GameDetails;
