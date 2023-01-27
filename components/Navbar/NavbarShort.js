import Link from "next/link";
import Image from "next/image";
import home from "../../public/img/navBarSvg/fontisto_home.png";
import contacts from "../../public/img/navBarSvg/phone.png";
import partners from "../../public/img/navBarSvg/part.png";
import cards from "../../public/img/navBarSvg/cards.png";
import people from "../../public/img/navBarSvg/people.png";
import person from "../../public/img/navBarSvg/person.png";
import styles from "./Navbar.module.scss";

const NavbarShort = () => {
  return (
    <>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <Image src={home} alt="navigate to home page" />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts">
            <Image src={contacts} alt="navigate to contacts" />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/partners">
            <Image src={partners} alt="navigate to partners" />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/gallery">
            <Image src={cards} alt="navigate to gallery" />
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/coaches">
            <Image src={people} alt="navigate to coaches" />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/user">
            <Image src={person} alt="navigate to user" />
          </Link>
        </li>
      </ul>
    </>
  );
};
export default NavbarShort;
