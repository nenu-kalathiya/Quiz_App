// src/components/SignIn.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({ onSignIn, users }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // For redirecting after sign in

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign In form submitted"); // Change the log to Sign In
        // Assuming you have some sign-in logic with users data
        const userExists = users.find((user) => user.email === email && user.password === password);

        if (userExists) {
            onSignIn({ email, password });
            console.log("User signed in:", { email, password });
            navigate("/"); // Redirect to home page after successful sign in
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign In</h2>
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
                    <div className="mb-6">
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
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-green-500">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
