import Header from "components/Header";
import styles from "styles/App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import clsx from "clsx";
// PAGES
import Home from "pages/Home";
import Quiz from "pages/Quiz";
import Scoreboard from "pages/Scoreboard";
// CONTEXT
import ThemeContext from "context/ThemeContext";
import { SelectProvider } from "context/SelectContext";
import { QuizContextProvider } from "context/QuizContext";
import { useContext } from "react";

const App = () => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <QuizContextProvider>
      <SelectProvider>
        <div className={clsx(styles.app, currentTheme === "light" ? styles.light : styles.dark)} id="app-container">
          <header>
            <Header />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
            </Routes>
          </main>
        </div>
      </SelectProvider>
    </QuizContextProvider>
  );
};

export default App;
