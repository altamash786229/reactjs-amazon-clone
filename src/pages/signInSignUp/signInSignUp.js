import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";
import { Container } from "react-bootstrap";
const SignInSignUp = () => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">SignInSignUp Page </h1>
      <div className="d-flex justify-content-between align-items-between">
        <SignIn />
        <SignUp />
      </div>
    </Container>
  );
};

export default SignInSignUp;
