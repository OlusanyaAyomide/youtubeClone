import { useState, useContext, createContext } from "react";

const AuthContext = createContext({
  session: null,
  status: "unauthenticated",
  AddSessionData: function () {},
  ResetSessionData: function () {},
});

export function AuthContextProvider(props) {
  const [session, setsession] = useState(null);
  const [status, setstatus] = useState("unauthenticated");

  function AddSession(user) {
    setsession(user);
  }
  function ResetSession() {
    setsession(null);
  }
  const context = {
    session: session,
    status: status,
    AddSessionData: AddSession,
    ResetSessionData: ResetSession,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
