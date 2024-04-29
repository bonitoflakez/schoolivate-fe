import PropTypes from "prop-types";

const QuizQuestion = ({ question, startQuiz }) => {
  return (
    <div className="quiz-question mb-2" key={question.id}>
      <li>{question.question}</li>
      <div className="flex items-center gap-4">
        {question.options.map((option) => (
          <span key={option.id}>
            <input
              type="radio"
              name={`question_${question.id}`}
              id={`question_${question.id}_option_${option.id}`}
              disabled={!startQuiz}
            />
            <label
              htmlFor={`question_${question.id}_option_${option.id}`}
              className="ml-1"
            >
              {option.item}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.object,
  startQuiz: PropTypes.bool.isRequired,
};

export default QuizQuestion;
