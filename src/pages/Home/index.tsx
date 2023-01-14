import React from "react";
import GameList from "../../components/GameList";

import ReactPaginate from "react-paginate";
import { useAppSelector } from "../../hooks";
import { GameObj } from "../../components/GameItem";

import styles from "./Home.module.scss";

const Home = () => {
  const games = useAppSelector((state) => state.games.items) as GameObj[];
  const itemsPerPage = 4;
  const [pageOffset, setPageOffset] = React.useState(1);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setPageOffset(newOffset);
  };

  return (
    <>
      <GameList pageOffset={pageOffset} itemsPerPage={itemsPerPage} />
      {games.length > 4 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={itemsPerPage}
          pageCount={games.length / itemsPerPage}
          previousLabel="<"
          className={styles.paginate}
        />
      )}
    </>
  );
};

export default Home;
