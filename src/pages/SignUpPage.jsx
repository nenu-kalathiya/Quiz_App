// src/pages/SignUpPage.jsx
import SignUp from "../components/SignUp";

const SignUpPage = ({ onSignUp }) => {
  return (
    <div>
      <SignUp onSignUp={onSignUp} />
    </div>
  );
};

export default SignUpPage;
