import Link from "next/link";
import styles from "./login.module.scss";

function Login() {
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <div className={styles.form}>
        <div className={styles.c}></div>
        <div className={styles.right}>
          <h2>User Log in</h2>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <br />
          <button>Log in</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            GGGGGG
            <span>
              <br />
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
