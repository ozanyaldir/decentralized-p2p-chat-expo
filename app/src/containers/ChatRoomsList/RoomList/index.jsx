import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { RoomListItem } from "../RoomListItem";
import { getLatestMessageByRoomId } from "../../../util/message";

/**
 * @param {{
 * rooms: any[],
 * messages: any[],
 * onPressJoinRoom?: () => void,
 *  }} props
 */
export const RoomList = ({ rooms = [], messages = [], onPressJoinRoom }) => {
  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={{ flexGrow: 1 }}
      data={rooms}
      keyExtractor={(_, index) => `ReceivedLikesFlatList${index}`}
      ItemSeparatorComponent={() => <View style={styles.seperatorView} />}
      renderItem={({ item }) => {
        const lastMessage = getLatestMessageByRoomId(messages, item);
        return (
          <RoomListItem
            room={item}
            lastMessage={lastMessage}
            onPress={() => onPressJoinRoom(item)}
          />
        );
      }}
    />
  );
};
