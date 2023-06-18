export const requestMessages = () => ({
  type: "REQUEST_MESSAGES",
});

export const receiveMessages = (json) => ({
  type: "RECEIVE_MESSAGES",
  payload: json,
});
export const receiveUnwrap = (id) => ({
  type: "RECEIVE_UNWRAP",
  payload: id,
});
export const receiveFavorites = (id) => ({
  type: "RECEIVE_FAVORITES",
  payload: id,
});

export const requestMessagesError = () => ({
  type: "ERROR_MESSAGES",
  error: alert(
    "Что-то пошло не так, проверьте соединение с интернетом и обновите страницу"
  ),
});
