import Header from "../Header/Header";
import Footer from "../Footer";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
