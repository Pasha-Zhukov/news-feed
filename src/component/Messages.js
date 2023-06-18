import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Message from "./Message/Message";
import { Loader } from "../loader/Loader";
import { fetch } from "../api/api";

const Messages = () => {
  const messages = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!messages?.data?.length) {
      fetch(dispatch, 0);
    }
  }, []);

  const lastElementId = messages?.data[messages?.data?.length - 1]?.id;
  useEffect(() => {
    if (messages?.data?.length && !messages.isLoading) {
      localStorage.setItem("Messages", JSON.stringify(messages.data));
      setTimeout(() => {
        fetch(dispatch, lastElementId);
      }, 10000);
    }
  }, [messages.data]);

  return (
    <>
      <Message messages={messages} />
      {messages.isLoading ? <Loader /> : null}
    </>
  );
};
export default Messages;
