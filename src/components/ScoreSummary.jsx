// src/components/ScoreSummary.jsx
import { Link } from "react-router-dom";

const ScoreSummary = ({ score, total }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Quiz Summary</h1>
      <p>Your score is {score} out of {total}.</p>
      <Link to="/" className="text-blue-500">
        Go back to Quiz List
      </Link>
    </div>
  );
};

export default ScoreSummary;
