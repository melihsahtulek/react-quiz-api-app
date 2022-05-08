import styles from "styles/Header.module.scss";
import GetIcon from "components/GetIcon";
import { useContext, useEffect } from "react";
import clsx from "clsx";
import ThemeContext from "context/ThemeContext";

const Header = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    !theme && localStorage.setItem("theme", currentTheme);
    setCurrentTheme(theme);
  });

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>mt-quiz</h1>
      </div>
      <div className={clsx(styles.themeSwitcher, currentTheme === "dark" ? styles.dark : styles.light)}>
        <label htmlFor="themeCheckbox">
          <input
            type="checkbox"
            name="themeCheckbox"
            id="themeCheckbox"
            hidden
            onChange={() => {
              // THEME
              currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
              localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
            }}
          />
          <div className={styles.icon}>
            <GetIcon icon="BsMoonStarsFill" size={16} color="#F8CB2E" />
          </div>
          <div className={styles.icon}>
            <GetIcon icon="BsFillSunFill" size={16} color="#F8CB2E" />
          </div>
          <div className={clsx(styles.ball, currentTheme === "dark" ? styles.ballRight : styles.ballLeft)}></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
