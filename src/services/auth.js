import jwt from "jsonwebtoken";

const token = () => sessionStorage.getItem("@token");

export function verify(token) {
  try {
    jwt.verify(token, process.env.REACT_APP_JWT_TOKEN);
    return true;
  } catch (e) {
    return false;
  }
}

export function isAuthenticated() {
  const localToken = token();
  if (!localToken) return false;

  return verify(localToken);
}

export async function authenticate(token) {
  if (!token || !verify(token)) throw new Error("Invalid Token Provided!");
  return sessionStorage.setItem("@token", token);
}

export function logout() {
  return sessionStorage.removeItem("@token");
}

// User

export async function setUser(user) {
  return localStorage.setItem("@user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("@user"));
}
