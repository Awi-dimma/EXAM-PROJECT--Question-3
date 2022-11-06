import React from "react";

const FakeUserAuthContext = React.createContext({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
  signIn: () => {},
  signOut: () => {},
});
export default FakeUserAuthContext;