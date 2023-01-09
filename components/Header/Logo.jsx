import Image from "next/image";
// import logo from "/logo.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo_imgWrapper}>
        <Image src="/logo.png" width={58} height={64} alt="Almazur" />
      </div>

      <div className={styles.logo_textWrapper}>
        <div className={styles.logo_text}>RHYTHMIC</div>
        <div className={styles.logo_title}>ALMAZUR</div>
        <div className={styles.logo_text}>GYMNASTIC</div>
      </div>
    </div>
  );
};

export default Logo;
