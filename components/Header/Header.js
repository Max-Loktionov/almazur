import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo></Logo>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/login">Увійти</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/signup">Реєстрація</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
