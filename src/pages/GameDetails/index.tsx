import { useEffect } from "react";
import { useParams } from "react-router-dom";

import styles from "./GameDetails.module.scss";

import { GameObj } from "../../components/GameItem";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchOneGame } from "../../redux/slices/gameSlice";

const GameDetails = () => {
  const params = useParams(); // params.id
  const currentGame: GameObj | null = useAppSelector((state) => state.games.currentGame);
  const status = useAppSelector((state) => state.games.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentGame) {
      return;
    }
    if (params.id) {
      dispatch(fetchOneGame(params.id));
    }
  }, [params.id, currentGame, dispatch]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <img src={currentGame?.imgUrl} alt="" className={styles.Img} />
      <h1 className={styles.gameTitle}>{currentGame?.title}</h1>
      <p className={styles.gameInfo}>Released: {currentGame?.released}</p>
      {currentGame?.reviewSummary && (
        <p className={styles.gameInfo}>Review Summary: {currentGame?.reviewSummary.replace("<br>", ", ")}</p>
      )}

      {currentGame?.price && <p className={styles.gameInfo}>Price: {currentGame?.price}</p>}
    </>
  );
};

export default GameDetails;
