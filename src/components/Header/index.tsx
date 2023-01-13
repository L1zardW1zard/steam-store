import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import Search from "../Search";
import Sort from "../Sort";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <Search />
      <Sort />

      <nav>
        <Link to="/">Search</Link>
        <Link to="/liked">Like list</Link>
      </nav>
    </header>
  );
};

export default Header;
