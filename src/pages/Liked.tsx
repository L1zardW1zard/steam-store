import GameItem from "../components/GameItem";
import { useAppSelector } from "../hooks";

const Liked = () => {
  const items = useAppSelector((state) => state.liked.items);

  return (
    <>
      {items.map((item) => {
        return <GameItem key={item.appId} {...item} />;
      })}
    </>
  );
};

export default Liked;
