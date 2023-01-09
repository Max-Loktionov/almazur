import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navList}>
        {/* <li className={styles.navItem}>
          <Link href="/">Домашня</Link>
        </li> */}
        <li className={styles.navItem}>
          <Link href="/user">Моя сторінка</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/coaches">Викладачі</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery">Галерея</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/partners">Партнери</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts">Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
