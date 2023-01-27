import Link from "next/link";
import styles from "./Navbar.module.scss";

const NavbarLong = () => {
  return (
    <>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Домашня</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/partners">Партнери</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery">Галерея</Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/coaches">Викладачі</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/user">Моя сторінка</Link>
        </li>
      </ul>
    </>
  );
};
export default NavbarLong;
