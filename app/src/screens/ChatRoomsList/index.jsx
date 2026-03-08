import { View, Alert } from "react-native";
import { styles } from "./styles";
import { NavigationBar } from "../../containers/ChatRoomsList/NavigationBar";
import { useNavigation } from "@react-navigation/native";
import { EmptyPageView } from "../../containers/ChatRoomsList/EmptyPageView";
import { RoomList } from "../../containers/ChatRoomsList/RoomList";
import { useEffect, useMemo } from "react";
import { useLoadingContext } from "../../context/LoadingContext";
import useChatRoomListViewModel from "../../viewmodels/ChatRoomList";

export const ChatRoomsList = () => {
  const navigation = useNavigation();
  const { setIsLoading: setIsLoadingContext } = useLoadingContext();
  const { rooms, messages, loading, createRoom, joinRoom } =
    useChatRoomListViewModel();

  useEffect(() => {
    setIsLoadingContext(loading);
  }, [loading]);

  useEffect(() => {
    setIsLoadingContext(loading);
  }, [loading]);

  function didPressCreateRoom() {
    setIsLoadingContext(true);
    createRoom((res) => {
      setIsLoadingContext(false);
      navigation.navigate("ChatRoom", { topic: res });
    });
  }

  function didPressJoinRoom(roomTopicIn) {
    setIsLoadingContext(true);
    joinRoom(roomTopicIn, (res) => {
      setIsLoadingContext(false);
      navigation.navigate("ChatRoom", { topic: res });
    });
  }

  function showCreateJoinPopup() {
    Alert.prompt(
      "Create & Join Room",
      "Please select.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Create", onPress: didPressCreateRoom },
        { text: "Join", onPress: showJoinPopup },
      ],
      "default",
    );
  }

  function showJoinPopup() {
    Alert.prompt(
      "Join Room",
      "Please enter room id.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Join", onPress: didPressJoinRoom },
      ],
      "plain-text",
    );
  }

  const roomsComponent = useMemo(
    () => (
      <RoomList
        rooms={rooms}
        messages={messages}
        onPressJoinRoom={didPressJoinRoom}
      />
    ),
    [rooms, messages, loading],
  );

  return (
    <View style={styles.container}>
      <NavigationBar
        title="Chat Rooms"
        onPressRightButton={() => showCreateJoinPopup()}
      />
      {rooms.length === 0 && (
        <EmptyPageView
          onPressCreateRoom={() => didPressCreateRoom()}
          onPressJoinRoom={() => showJoinPopup()}
        />
      )}
      {rooms.length > 0 && roomsComponent}
    </View>
  );
};
