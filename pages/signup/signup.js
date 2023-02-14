import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../login/login.module.scss";

function Signup() {
  const HOST = process.env.HOST;
  // const HOST = "http://localhost:8080";
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const AUTH = `${HOST}/auth/google`;
      const { data } = await axios.get(AUTH, { withCredentials: true });
      console.log("signup16 data :", data);
      setUser(data.user._json);
    } catch (error) {
      console.log("signup18 error here");
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  const googleAuth = () => {
    console.log("signup31 HOST :", HOST);
    const AUTH = `${HOST}/auth/google`;
    // const AUTH = "http://localhost:8080";

    window.open(AUTH, "_self");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign in Form</h1>
      <div className={styles.form}>
        <div className={styles.c}></div>
        <div className={styles.right}>
          <h2>User Sign in</h2>
          <input type="text" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
          <br />
          <button onClick={getUser}>Sign in</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            GGGGGG
            <span>
              <br />
              Auth with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
