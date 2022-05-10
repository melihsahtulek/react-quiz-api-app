import styles from "styles/QuestionCard.module.scss";
import Button from "components/Button";
import QuizContext from "context/QuizContext";
import { useContext } from "react";

const QuestionCard = ({ category, type, question, correctAnswer, incorrectAnswers, index, setIndex }) => {
  const { quizQuestions } = useContext(QuizContext);

  const letters = ["A", "B", "C", "D", "E"];

  const nextQuestion = () => {
    console.log("nextQuestion");
    index + 1 < quizQuestions.length ? setIndex((i) => i + 1) : console.log("finish!");
  };

  const prevQuestion = () => {
    console.log("prevQuestion");
    index + 1 > 1 && setIndex((i) => i - 1);
  };

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
                <input type="radio" id={option} name="question_option" />
                <label htmlFor={option}>
                  {letters[i]}
                  {". "} {option}
                </label>
              </div>
            ))
          ) : (
            <>
              <div className={styles.option}>
                <input type="radio" id="question_true" name="question_option" />
                <label htmlFor="question_true">True</label>
              </div>
              <div className={styles.option}>
                <input type="radio" id="question_false" name="question_option" />
                <label htmlFor="question_false">False</label>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.nextPrevFinishBtns}>
        <Button title="previous question" bgColor="#9772fb" event={prevQuestion} />
        <Button title="next question" bgColor="#764af1" event={nextQuestion} />
        <Button title="finish quiz" bgColor="#F32424" />
      </div>
    </div>
  );
};

export default QuestionCard;
