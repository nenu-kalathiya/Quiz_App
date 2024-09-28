import QuizPage from "../components/QuizPage";
import { useParams } from "react-router-dom";

const QuizDetailPage = () => {
  const { id } = useParams(); // Get category ID from URL

  return (
    <div>
      <QuizPage category={id} /> {/* Pass the category to QuizPage */}
    </div>
  );
};

export default QuizDetailPage;
