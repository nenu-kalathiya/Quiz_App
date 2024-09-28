// src/pages/HomePage.jsx
import QuizList from "../components/QuizList";

const HomePage = ({ onLogout }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <button
        onClick={onLogout}
        className="mt-3 w-full max-w-xs px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
      >
        Logout
      </button>
      <QuizList />
    </div>
  );
};

export default HomePage;
