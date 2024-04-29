import { useState } from "react";

import { quizData } from "../utils/quizData";

import QuizzesIllustration from "../components/Quizzes/QuizzesIllustration";
import PendingQuizzes from "../components/Quizzes/PendingQuizzes";
import CompletedQuizzes from "../components/Quizzes/CompletedQuizzes";
import SelectedQuiz from "../components/Quizzes/SelectedQuiz";

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [isQuizSelected, setIsQuizSelected] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);

  const handleIsQuizSelected = (quizItem) => {
    setSelectedQuiz(quizItem);
    setIsQuizSelected(true);
  };

  const closeIsQuizSelected = () => {
    setSelectedQuiz(null);
    setIsQuizSelected(false);
    setStartQuiz(false);
  };

  const closeModal = () => {
    closeIsQuizSelected();
  };

  return (
    <>
      <h3 className="text-[2.5rem] font-medium mt-4">Quizzes</h3>
      <div
        className={`main-quiz-container ${
          isQuizSelected ? "bg-[--accent-x-extra-light]" : "bg-[--secondary-bg]"
        } rounded-2xl min-h-[90vh] px-16`}
      >
        {isQuizSelected ? (
          <>
            <SelectedQuiz
              closeIsQuizSelected={closeIsQuizSelected}
              startQuiz={startQuiz}
              closeModal={closeModal}
              selectedQuiz={selectedQuiz}
              setStartQuiz={setStartQuiz}
            />
          </>
        ) : (
          <>
            <QuizzesIllustration />
            <PendingQuizzes
              quizData={quizData}
              handleIsQuizSelected={handleIsQuizSelected}
            />
            <CompletedQuizzes
              quizData={quizData}
              handleIsQuizSelected={handleIsQuizSelected}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Quizzes;
