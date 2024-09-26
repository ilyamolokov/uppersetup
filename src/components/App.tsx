import React from "react";
import styles from "./App.module.css";
import { Logo } from "../icons/Logo";

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo className={styles.AppLogo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
