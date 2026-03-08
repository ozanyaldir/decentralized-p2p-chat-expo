import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useBackend } from "../../context/BareApiContext";
import {
  filterDuplicatesAndSortMessages,
  filterRoomMessages,
} from "../../util/message";
import { addMessage } from "../../store/chatSlice";
import uiEvent, { RECEIVE_MESSAGE_UI } from "../../lib/uiEvent";

export const useChatRoomViewModel = () => {
  const backend = useBackend();
  const dispatch = useDispatch();
  const messageListenerRef = useRef(null);

  const rawMessages = useSelector((state) => state.chat.messages);

  const [currentUserMemberId, setCurrentUserMemberId] = useState("");
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    setCurrentUserMemberId("-");
  }, []);

  const startListenMessageEvents = useCallback(() => {
    if (messageListenerRef.current) {
      messageListenerRef.current.off();
    }

    messageListenerRef.current = uiEvent.on(
      RECEIVE_MESSAGE_UI,
      ({ memberId, message }) => {
        dispatch(
          addMessage({
            ...message,
            local: false,
            roomTopic: topic,
            memberId,
          }),
        );
      },
    );
  }, [topic, dispatch]);

  const stopListenMessageEvents = useCallback(() => {
    if (!messageListenerRef.current) return;
    messageListenerRef.current.off();
    messageListenerRef.current = null;
  }, []);

  const messages = useMemo(() => {
    const roomMessages = filterRoomMessages(rawMessages, topic);
    return filterDuplicatesAndSortMessages(roomMessages);
  }, [topic, rawMessages]);

  const init = useCallback(setTopic, []);

  const sendMessage = useCallback(
    (text) => {
      // need room topic parameter to send message to spesific room
      // or an action to leave room
      backend.sendMessage(text, (message) => {
        dispatch(
          addMessage({
            roomTopic: topic,
            message: message,
            local: true,
            memberId: "-",
            timestamp: new Date().toISOString(),
          }),
        );
      });
    },
    [topic, backend, dispatch],
  );

  return {
    topic,
    currentUserMemberId,
    messages,
    init,
    startListenMessageEvents,
    stopListenMessageEvents,
    sendMessage,
  };
};

export default useChatRoomViewModel;
