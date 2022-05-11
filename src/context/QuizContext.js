import { createContext, useState } from "react";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [yourAnswers, setYourAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const values = {
    endpoint,
    setEndpoint,
    quizQuestions,
    setQuizQuestions,
    yourAnswers,
    setYourAnswers,
    isQuizFinished,
    setIsQuizFinished,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};

export default QuizContext;
