const savedMessages = localStorage.getItem("Messages");
const initialState = { data: JSON.parse(savedMessages) || [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_MESSAGES":
      return {
        ...state,
        isLoading: true,
      };

    case "RECEIVE_MESSAGES":
      return {
        data: [...state.data, ...action.payload],
        isLoading: false,
      };
    case "RECEIVE_UNWRAP":
      return {
        ...state,
        data: state.data.map((message) => {
          if (message.id === action.payload) {
            return { ...message, unwrap: !message.unwrap };
          } else return message;
        }),
      };
    case "RECEIVE_FAVORITES":
      return {
        ...state,
        data: state.data.map((message) => {
          if (message.id === action.payload) {
            return { ...message, favorites: !message.favorites };
          } else return message;
        }),
      };
    case "ERROR_MESSAGES":
      return {
        ...state,
        ...action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
