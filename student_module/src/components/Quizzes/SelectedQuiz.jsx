import { ArrowLeft } from "@phosphor-icons/react";
import QuizQuestion from "./QuizQuestion";
import StartQuizModal from "./StartQuizModal";

import PropTypes from "prop-types";

const SelectedQuiz = ({
  closeIsQuizSelected,
  startQuiz,
  closeModal,
  selectedQuiz,
  setStartQuiz,
}) => {
  return (
    <>
      <div className="quiz-top-section">
        <div className="quiz-top-section flex items-center justify-between">
          <div className="back-to-quizzes">
            <button
              className="cursor-pointer"
              onClick={closeIsQuizSelected}
              disabled={startQuiz && !selectedQuiz.completed}
            >
              <ArrowLeft size={32} weight="bold" />
            </button>
          </div>
          <div className="pt-12 text-center">
            <h3 className="text-3xl font-medium">{selectedQuiz.title}</h3>
            <h3 className="text-lg mt-8">
              Total Marks: {selectedQuiz.max_score} | Duration:{" "}
              {selectedQuiz.duration}
            </h3>
          </div>
          <div className="text-lg">
            <span className="text-center">
              <h3 className="opacity-60">Due Date</h3>
              <h3>{selectedQuiz.due}</h3>
            </span>
          </div>
        </div>

        <div
          className={`quiz-area ${
            !startQuiz && "blur-sm select-none"
          } mt-24 text-lg mx-12 mb-2 pb-6`}
        >
          <ol className="list-decimal">
            {selectedQuiz.questions.map((question) => (
              <QuizQuestion key={question.id} question={question} startQuiz={startQuiz} />
            ))}
          </ol>
          <div className="finish-quiz mt-6 flex items-center justify-center">
            {!selectedQuiz.completed && (
              <button className="finish-quiz px-2 py-1 text-[--primary-bg] bg-[--accent-normal] rounded-lg">
                Finish Quiz
              </button>
            )}
          </div>
        </div>
      </div>
      <StartQuizModal
        startQuiz={startQuiz}
        closeModal={closeModal}
        selectedQuiz={selectedQuiz}
        setStartQuiz={setStartQuiz}
      />
    </>
  );
};

SelectedQuiz.propTypes = {
  closeIsQuizSelected: PropTypes.func,
  startQuiz: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedQuiz: PropTypes.object.isRequired,
  setStartQuiz: PropTypes.func.isRequired,
};

export default SelectedQuiz;
