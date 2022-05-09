import styles from "styles/QuestionCard.module.scss";
import Button from "components/Button";
import QuizContext from "context/QuizContext";
import { useContext } from "react";

const QuestionCard = ({ category, type, question, correctAnswer, incorrectAnswers, index }) => {
  const { quizQuestions } = useContext(QuizContext);

  const letters = ["A", "B", "C", "D", "E"];

  return (
    <div className={styles.questionCard}>
      <div className={styles.header}>
        <div className={styles.catName}>
          <small>category</small>
          <h4>{category}</h4>
        </div>
        <div className={styles.progressContainer}>
          <small>
            <span>question</span>{" "}
            <span>
              {index + 1}/{quizQuestions.length}
            </span>
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
          {type === "multiple" ? (
            [...incorrectAnswers, correctAnswer].map((option, i) => (
              <div className={styles.option} key={i}>
                <input type="radio" id="question_a" name="question_option" />
                <label htmlFor="question_a">
                  {letters[i]}
                  {". "} {option}
                </label>
              </div>
            ))
          ) : (
            <>
              <div className={styles.option}>
                <input type="radio" id="question_a" name="question_option" />
                <label htmlFor="question_a">True</label>
              </div>
              <div className={styles.option}>
                <input type="radio" id="question_a" name="question_option" />
                <label htmlFor="question_a">False</label>
              </div>
            </>
          )}
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
