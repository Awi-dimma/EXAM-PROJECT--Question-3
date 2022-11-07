import { useNavigate } from "react-router-dom";
import Card from './Card'
import './LogIn.css'
import Button from './Button'
import {Helmet} from "react-helmet-async"


const LogIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
          <title>LogIn</title>
          <meta 
            name="description"
            content="This page describe's my LogIn page"
            />
        </Helmet>
    <Card className="sign_in">
      <h4>Sign in below</h4>
      <Button onClick={() =>
        navigate("/redirectionpage")
      }>Sign In</Button>
    </Card>
    </>
  );
};
export default LogIn;