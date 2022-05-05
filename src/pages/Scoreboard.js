import Button from "components/Button";
import styles from "styles/Scoreboard.module.scss";

const Scoreboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div className={styles.box}>
          <h4>Correct Answers</h4>
          <h2>40/60</h2>
        </div>
        <div className={styles.box}>
          <h4>Wrong Answers</h4>
          <h2>40/60</h2>
        </div>
        <div className={styles.box}>
          <h4>time</h4>
          <h2>120 s</h2>
        </div>
        <div className={styles.box}>
          <h4>empty questions</h4>
          <h2>5</h2>
        </div>
        <div className={styles.box}>
          <h4>category</h4>
          <h2>Sports</h2>
        </div>
        <div className={styles.box}>
          <h4>point</h4>
          <h2>1250</h2>
        </div>
      </div>

      <div className={styles.startNewQuiz}>
        <Button title="start new quiz" bgColor="#30475e" />
      </div>
    </div>
  );
};

export default Scoreboard;
