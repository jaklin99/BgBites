// src/auth.js
let auth = {
  username: "",
  password: "",
};

export const setAuth = (username, password) => {
  auth.username = username;
  auth.password = password;
};

export const getAuth = () => {
  return auth.username && auth.password
    ? {
        auth: {
          username: auth.username,
          password: auth.password,
        },
      }
    : {};
};
