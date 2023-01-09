import Header from "./Header/Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
