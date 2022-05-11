import styles from "styles/QuestionCard.module.scss";
import Button from "components/Button";
import QuizContext from "context/QuizContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ category, type, question, correctAnswer, incorrectAnswers, index, setIndex }) => {
  const { quizQuestions, yourAnswers, setYourAnswers, isQuizFinished, setIsQuizFinished } = useContext(QuizContext);
  const [value, setValue] = useState(100 / quizQuestions.length);
  const navigate = useNavigate();

  useEffect(() => {
    isQuizFinished && navigate("/");

    const inputs = document.querySelectorAll("input[type=radio]");
    for (const input of inputs) {
      input.checked = false;
    }
  }, [index]);

  const letters = ["A", "B", "C", "D", "E"];

  const nextQuestion = () => {
    if (index + 1 < quizQuestions.length) {
      setIndex((i) => i + 1);
      setValue((val) => (val += 100 / quizQuestions.length));
    } else {
      navigate("/scoreboard");
      setIsQuizFinished(true);
    }
  };

  const prevQuestion = () => {
    if (index + 1 > 1) {
      setIndex((i) => i - 1);
      setValue((val) => (val -= 100 / quizQuestions.length));
    }
  };

  const saveYourAnswer = (option) => {
    let arr = [...yourAnswers];
    arr[index] = {
      questionIndex: index,
      yourAnswer: option,
      correctAnswer,
    };

    setYourAnswers(arr);
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
          <progress id="file" value={value} max="100" />
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
                <input type="radio" id={option} name="question_option" onClick={() => saveYourAnswer(option)} />
                <label htmlFor={option}>
                  {letters[i]}
                  {". "} {option}
                </label>
              </div>
            ))
          ) : (
            <>
              <div className={styles.option}>
                <input type="radio" id="question_true" name="question_option" onClick={() => saveYourAnswer("true")} />
                <label htmlFor="question_true">True</label>
              </div>
              <div className={styles.option}>
                <input type="radio" id="question_false" name="question_option" onClick={() => saveYourAnswer("false")} />
                <label htmlFor="question_false">False</label>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.nextPrevFinishBtns}>
        <Button title="previous question" bgColor="#9772fb" event={prevQuestion} />
        <Button title="next question" bgColor="#764af1" event={nextQuestion} />
        <Button
          title="finish quiz"
          bgColor="#F32424"
          event={() => {
            setIsQuizFinished(true);
            navigate("/scoreboard");
          }}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
