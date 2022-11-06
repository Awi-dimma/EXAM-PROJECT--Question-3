import { useNavigate } from "react-router-dom";
import Card from './Card'
import './LogIn.css'
import Button from './Button'
const LogIn = () => {
  const navigate = useNavigate();

  return (
    <Card className="sign_in">
      <h4>Sign in below</h4>
      <Button onClick={() =>
        navigate("/redirectionpage")
      }>Sign In</Button>
    </Card>
  );
};
export default LogIn;