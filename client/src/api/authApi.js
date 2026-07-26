import httpClient from "./httpClient";

export const login = async (email, password) => {
  const { data } = await httpClient.post("/api/auth/login", {
    email,
    password,
  });
  return data;
};

export const register = async (email, password) => {
  const { data } = await httpClient.post("/api/auth/register", {
    email,
    password,
  });
  return data;
};
