const Login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

const Logout = () => {
  return {
    type: "LOGOUT",
  };
};

export default {
  Login,
  Logout,
};
