// src/components/QuizList.jsx
import { Link } from "react-router-dom";

const QuizList = () => {
  const quizzes = [
    { id: 1, title: "HTML Quiz", category: 183 }, // Update category ID
    { id: 2, title: "CSS Quiz", category: 147 },  // Update category ID
    { id: 3, title: "JavaScript Quiz", category: 18 }, // Update category ID
    { id: 4, title: "JQUERY Quiz", category: 22 },
    { id: 5, title: "Bootstrap Quiz", category: 11 },
    { id: 6, title: "React Js Quiz", category: 29 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <Link to={`/quiz/${quiz.category}`} className="text-blue-500">
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizList;
