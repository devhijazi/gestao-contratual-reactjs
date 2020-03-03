import jwt from "jsonwebtoken";

const token = () => localStorage.getItem("token");

export function isAuthenticate() {
  const getToken = token();
  if (!token) return false;

  try {
    jwt.verify(getToken, process.env.REACT_APP_JWT_TOKEN);
    return true;
  } catch (e) {
    return false;
  }
}

export function authenticate() {}

export function logout() {}
