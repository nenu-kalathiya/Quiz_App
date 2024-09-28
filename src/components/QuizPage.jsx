import { useEffect, useState } from "react";

const QuizPage = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/data.json'); // Now fetch from public folder
        const data = await response.json();
        const quiz = data.quizzes.find(q => q.category === category); // Category se quiz find karo
        setQuestions(quiz.questions); // Questions set karo
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [category]);

  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption("");
  };

  return (
    <div className="container mx-auto p-4">
      {currentQuestion < questions.length ? (
        <div>
          <h2 className="text-2xl">{questions[currentQuestion].question}</h2>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`block p-2 my-2 ${
                  selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
                } rounded`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleAnswerSubmit}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl">Quiz Complete!</h2>
          <p>Your score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
