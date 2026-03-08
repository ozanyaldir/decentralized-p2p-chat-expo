import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "../../../components/Icon";

/**
 * @param {{
 * room: any,
 * lastMessage: any,
 * onPress?: () => void,
 *  }} props
 */
export const RoomListItem = ({ room, lastMessage, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={1}>
          {room}
        </Text>
        <Text style={styles.descriptionText} numberOfLines={1}>
          {lastMessage?.message ?? "No messages yet..."}
        </Text>
      </View>
      <View style={styles.chevronContainer}>
        <Icon name="chevron-forward-outline" color={"#000"} size={16} />
      </View>
    </TouchableOpacity>
  );
};
