const QuizTest = () => {
  // sample quiz data
  const QuizTestData = [
    {
      id: 1,
      title: "Quiz - 1",
      level: "General Knowledge Level",
      maxMarks: 100,
      securedMarks: 75,
    },
    {
      id: 2,
      title: "Quiz - 2",
      level: "General Knowledge Level",
      maxMarks: 100,
      securedMarks: 75,
    },
    {
      id: 3,
      title: "Quiz - 3",
      level: "General Knowledge Level",
      maxMarks: 100,
      securedMarks: 75,
    },
  ];

  return (
    <div className="w-2/5 px-4 py-2">
      <div className="flex items-center mb-4">
        <h3 className="font-normal text-2xl">Quizzes/Tests</h3>
        <button
          className="px-4 py-0.5 font-semibold text-xs ml-auto rounded-md"
          style={{
            border: "2px solid var(--accent-dark)",
            color: "var(--accent-dark)",
          }}
        >
          View More
        </button>
      </div>
      <div>
        <ul className="h-72 overflow-y-auto">
          {/* quiz test data map -> render each quiz test */}
          {QuizTestData.map((quiz) => (
            <li
              key={quiz.id}
              className="text-xl font-normal py-1 mb-4 rounded-lg"
              style={{
                background: "var(--accent-extra-light)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg">
                  <h3>{quiz.title}</h3>
                  <h3>{quiz.level}</h3>
                </div>
                <div className="mr-4">
                  <div className="h-12 w-16 flex items-center text-2xl justify-center rounded-lg">
                    <h3 className="p-8">
                      {Math.round((quiz.securedMarks / quiz.maxMarks) * 100)}%
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizTest;
