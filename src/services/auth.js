import jwt from "jsonwebtoken";

export const token = () => sessionStorage.getItem("@token");

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
 sessionStorage.removeItem("@token");

 return window.location.reload();

}

// User

export async function setUser(user) {
  return localStorage.setItem("@user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("@user"));
}
