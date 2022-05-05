import styles from "styles/QuestionCard.module.scss";
import Button from "components/Button";

const QuestionCard = ({ category, question }) => {
  return (
    <div className={styles.questionCard}>
      <div className={styles.header}>
        <div className={styles.catName}>
          <small>category</small>
          <h4>{category}</h4>
        </div>
        <div className={styles.progressContainer}>
          <small>
            <span>question</span> <span>1/10</span>
          </small>
          <progress id="file" value="10" max="100">
            32%
          </progress>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.question}>
          <p>{question}</p>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <input type="radio" id="question_a" name="question_option" />
            <label htmlFor="question_a">option A</label>
          </div>
          <div className={styles.option}>
            <input type="radio" id="question_a2" name="question_option" />
            <label htmlFor="question_a2">option A</label>
          </div>
          <div className={styles.option}>
            <input type="radio" id="question_a3" name="question_option" />
            <label htmlFor="question_a3">option A</label>
          </div>
        </div>
      </div>

      <div className={styles.nextPrevFinishBtns}>
        <Button title="previous question" bgColor="#9772fb" />
        <Button title="next question" bgColor="#764af1" />
        <Button title="finish quiz" bgColor="#F32424" />
      </div>
    </div>
  );
};

export default QuestionCard;
