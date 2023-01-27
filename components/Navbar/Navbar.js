import { useState } from "react";
import styles from "./Navbar.module.scss";
import NavbarLong from "./NavbarLong";
import NavbarSet from "./NavbarSet";
import NavbarShort from "./NavbarShort";

const Navbar = () => {
  const [isLong, setLong] = useState(false);
  return (
    <nav className={styles.navBar}>
      {isLong ? <NavbarLong /> : <NavbarShort />}

      <div className="styles.navSet">
        <NavbarSet />
      </div>
    </nav>
  );
};
export default Navbar;
