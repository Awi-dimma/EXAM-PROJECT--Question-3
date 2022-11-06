import { useContext } from "react";
import FakeUserAuthContext from "../components/FakeUserAuthContext";

const useLoggedIn = () => {
  const { user } = useContext(FakeUserAuthContext);

  return user;
};
export default useLoggedIn;