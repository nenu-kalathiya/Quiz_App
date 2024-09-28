// src/components/SignUp.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ onSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // For redirecting after sign up

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Call onSignUp prop with user data
    onSignUp({ email, password });
    // Redirect to Home Page after sign up
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold">Confirm Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
