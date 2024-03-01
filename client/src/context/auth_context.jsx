import { createContext, useContext, useReducer, useRef } from "react";
import { authReducer } from "../reducer/auth_reducer";

const initialValue = {
  isAuthModalOpen: false,
  isDropDownModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [{ isAuthModalOpen, name, email, password, number }, authDispatch] =
    useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{ isAuthModalOpen, name, email, password, number, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
