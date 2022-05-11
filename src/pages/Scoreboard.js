import Button from "components/Button";
import styles from "styles/Scoreboard.module.scss";
import { useContext, useEffect } from "react";
import QuizContext from "context/QuizContext";
import { useNavigate } from "react-router-dom";

const Scoreboard = () => {
  const { quizQuestions, yourAnswers, isQuizFinished, setIsQuizFinished } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    !isQuizFinished && navigate("/");
  });

  return (
    isQuizFinished && (
      <div className={styles.container}>
        <div className={styles.result}>
          <div className={styles.box}>
            <h4>Correct Answers</h4>
            <h2>
              {(function () {
                let correctAnswerN = yourAnswers.filter((answer) => answer.yourAnswer === answer.correctAnswer).length;
                return `${correctAnswerN} / ${quizQuestions.length}`;
              })()}
            </h2>
          </div>
          <div className={styles.box}>
            <h4>Wrong Answers</h4>
            <h2>
              {(function () {
                let wrongAnswerN = yourAnswers.filter((answer) => answer.yourAnswer !== answer.correctAnswer).length;
                return `${wrongAnswerN} / ${quizQuestions.length}`;
              })()}
            </h2>
          </div>
          <div className={styles.box}>
            <h4>time</h4>
            <h2>120 s</h2>
          </div>
          <div className={styles.box}>
            <h4>empty questions</h4>
            <h2>
              {(function () {
                let correctAnswerN = yourAnswers.filter((answer) => answer.yourAnswer === answer.correctAnswer).length;
                let wrongAnswerN = yourAnswers.filter((answer) => answer.yourAnswer !== answer.correctAnswer).length;
                return `${quizQuestions.length - (correctAnswerN + wrongAnswerN)} / ${quizQuestions.length}`;
              })()}
            </h2>
          </div>
          <div className={styles.box}>
            <h4>category</h4>
            <h2>{quizQuestions[0].category}</h2>
          </div>
          <div className={styles.box}>
            <h4>your point</h4>
            <h2>
              {(function () {
                let correctAnswerN = yourAnswers.filter((answer) => answer.yourAnswer === answer.correctAnswer).length;
                return `${(100 / quizQuestions.length) * correctAnswerN}`;
              })()}
            </h2>
          </div>
        </div>

        <div className={styles.startNewQuiz}>
          <Button
            title="start new quiz"
            bgColor="#30475e"
            event={() => {
              navigate("/");
              setIsQuizFinished(false);
            }}
          />
        </div>
      </div>
    )
  );
};

export default Scoreboard;
