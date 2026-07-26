import { useState } from "react";
import { useAuth } from "./useAuth";
import * as authApi from "../api/authApi";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuth();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      const user = await authApi.login(email, password);

      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "LOGIN", payload: user });
    } catch (error) {
      setError(error.response?.data?.msg || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};
