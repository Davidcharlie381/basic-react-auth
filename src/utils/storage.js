export const saveToLocal = (user) => {
  let userString = JSON.stringify(user);

  localStorage.setItem(user.firstName, userString);
};

export const getFromLocal = (user) => {
  let checkUser = localStorage.getItem(user);

  return checkUser;
};
