import styles from "styles/Header.module.scss";
import GetIcon from "components/GetIcon";
import { useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>mt-quiz</h1>
      </div>
      <div className={clsx(styles.themeSwitcher, theme === "dark" ? styles.dark : styles.light)}>
        <label htmlFor="themeCheckbox">
          <input type="checkbox" name="themeCheckbox" id="themeCheckbox" hidden onChange={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
          <div className={styles.icon}>
            <GetIcon icon="BsMoonStarsFill" size={16} color="#F8CB2E" />
          </div>
          <div className={styles.icon}>
            <GetIcon icon="BsFillSunFill" size={16} color="#F8CB2E" />
          </div>
          <div className={clsx(styles.ball, theme === "dark" ? styles.ballRight : styles.ballLeft)}></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
