// src/pages/SignInPage.jsx
import SignIn from "../components/SignIn";

const SignInPage = ({ onSignIn, users }) => {
  return (
    <div>
      <SignIn onSignIn={onSignIn} users={users} />
    </div>
  );
};

export default SignInPage;
