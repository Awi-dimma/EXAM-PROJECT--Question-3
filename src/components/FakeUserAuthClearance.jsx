import { useReducer } from "react";
import FakeUserAuthContext from "./FakeUserAuthContext";

const initialState = {
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
  signIn: () => { },
  signOut: () => { },
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        isLoggedIn: true,
        user: {
          name: `${action.payload.name}`,
          email: `${action.payload.email}`,
        },
      };
    case "SIGN_OUT":
      return {
        isLoggedIn: false,
        user: {
          name: "",
          email: "",
        },
      };
    default:
      return state;
  }
};

const FakeUserAuthContextProvider = (props) => {
  const [AuthState, dispatchFn] = useReducer(AuthReducer, initialState);

  const signIn = (user) => {
    dispatchFn({ type: "SIGN_IN", payload: user });
  };
  const signOut = () => {
    dispatchFn({ type: "SIGN_OUT" });
  };

  const { isLoggedIn, user } = AuthState;

  const data = {
    isLoggedIn,
    user,
    signIn,
    signOut,
  };

  return (
    <FakeUserAuthContext.Provider value={data}>
      {props.children}
    </FakeUserAuthContext.Provider>
  );
};
export default FakeUserAuthContextProvider;