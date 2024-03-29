import Heading from "./Heading";
import styles from "../styles/Home.module.scss";

const Header = () => {
  return (
    <footer className={styles.footer}>
      <Heading tag="h3" text="Created by malannkas in 2023" />
    </footer>
  );
};

export default Header;
