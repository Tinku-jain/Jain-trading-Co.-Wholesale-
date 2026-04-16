export const loginUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};