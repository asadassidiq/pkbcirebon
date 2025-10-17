const ID_TOKEN_KEY = "id_token";
const USER = "userPKB";
const NOTIF = "notifPKB";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveUser = user => {
  window.localStorage.setItem(USER, JSON.stringify(user));
};

export const saveNotif = notif => {
  window.localStorage.setItem(NOTIF, JSON.stringify(notif));
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(USER);
  // window.localStorage.removeItem(NOTIF);
};

export default { getToken, saveToken, saveUser, saveNotif, destroyToken };
