import {
  receiveMessages,
  requestMessages,
  requestMessagesError,
} from "../redux/actions";
import axios from "axios";

export const fetch = async (dispatch, id = 0) => {
  const formData = new FormData();
  formData.append("actionName", "MessagesLoad");
  formData.append("messageId", id);
  // formData.append("oldMessages", true);

  dispatch(requestMessages());
  const url = "http://a0830433.xsph.ru";
  try {
    const response = await axios.post(url, formData);
    const responseMessages =
      response.data?.Messages?.sort((a, b) => a.id - b.id) || [];
    const messages = responseMessages.map((element) => ({
      ...element,
      unwrap: false,
      favorites: false,
    }));
    dispatch(receiveMessages(messages));
  } catch {
    return dispatch(requestMessagesError(dispatch));
  }
};
