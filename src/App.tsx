import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import NotFound from "./pages/NotFound";
import Liked from "./pages/Liked";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="liked" element={<Liked />} />
            <Route path="app/:id" element={<GameDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
