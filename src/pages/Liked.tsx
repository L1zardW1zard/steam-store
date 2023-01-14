import { useEffect } from "react";
import GameItem from "../components/GameItem";
import { useAppSelector } from "../hooks";

const Liked = () => {
  const items = useAppSelector((state) => state.liked.items);

  useEffect(() => {
    //localStorage.setItem("liked", JSON.stringify(items));

    if (items.length === 0) {
      console.log(localStorage.getItem("liked"));
    }
  }, [items]);

  return (
    <>
      <div className="likedList">
        {items.map((item) => {
          return <GameItem key={item.appId} {...item} />;
        })}
      </div>
    </>
  );
};

export default Liked;
