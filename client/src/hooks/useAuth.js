import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Returns the AuthContext value, guarding against use outside its provider
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthContextProvider");
  }

  return context;
};
