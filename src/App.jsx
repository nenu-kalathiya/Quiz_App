import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import QuizDetailPage from "./pages/QuizDetailPage"; // Update import for QuizDetailPage

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/signin" element={isAuthenticated ? <Navigate to="/" replace /> : <SignInPage onSignIn={handleSignIn} users={users} />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/" replace /> : <SignUpPage onSignUp={handleSignUp} />} />
      
      {isAuthenticated ? (
        <>
          <Route path="/" element={<HomePage onLogout={handleLogout} />} />
          <Route path="/quiz/:id" element={<QuizDetailPage />} /> {/* Use QuizDetailPage for quiz details */}
        </>
      ) : (
        <Route path="*" element={<Navigate to="/signin" replace />} />
      )}
    </Routes>
  );
}

export default App;
