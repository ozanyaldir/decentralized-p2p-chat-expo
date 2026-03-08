import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useBackend } from "../../context/BareApiContext";
import { addRoom } from "../../store/chatSlice";

export const useChatRoomListViewModel = () => {
  const backend = useBackend();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState();
  const { rooms, messages } = useSelector((state) => state.chat);

  const createRoom = useCallback(
    (onFinished) => {
      setLoading(true);
      backend.createRoom((res) => {
        onFinished(res);
        setLoading(false);
        dispatch(addRoom(res));
      });
    },
    [backend, dispatch],
  );

  const joinRoom = useCallback(
    (roomTopicIn, onFinished) => {
      setLoading(true);
      const topic = roomTopicIn.replace("Topic: ", "");
      backend.joinRoom(topic, (res) => {
        onFinished(res);
        setLoading(false);
        dispatch(addRoom(res));
      });
    },
    [backend, dispatch],
  );

  return {
    rooms,
    messages,
    loading: loading || !backend,
    createRoom,
    joinRoom,
  };
};

export default useChatRoomListViewModel;
