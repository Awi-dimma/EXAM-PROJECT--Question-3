import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Input from "./input";
import FakeUserAuthContext from "./FakeUserAuthContext"

const SignInRedirect = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const navigate = useNavigate();

  const { signIn } = useContext(FakeUserAuthContext)

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    signIn({ name: name, email: email });

    navigate("/home");
  };

  return (
    <form onSubmit={submitHandler} className="redirect__form">
      <Input
        label="Name"
        type="text"
        placeholder="Enter your name"
        ref={nameRef}
        minLength={4}
        required="required"
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        ref={emailRef}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};
export default SignInRedirect;