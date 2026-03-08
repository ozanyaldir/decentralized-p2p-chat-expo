import { FlatList, View } from "react-native";
import { styles } from "./styles";
import { IncomingMessage } from "../IncomingMessage";
import { OutgoingMessage } from "../OutgoingMessage";

/**
 * @param {{
 * currentUserMemberId: string,
 * data: any,
 *  }} props
 */
export const MessageList = ({ currentUserMemberId = "", messages = [] }) => {
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(item) => `${item.timestamp}`}
      contentContainerStyle={{ flexGrow: 1 }}
      inverted={true}
      data={messages}
      ListHeaderComponent={() => <View style={{ height: 12 }} />}
      renderItem={({ index }) => {
        const currentMessage = messages.at(index) ?? undefined;
        if (!currentMessage) return null;
        const isFromCurrentUser =
          currentMessage.memberId === currentUserMemberId;

        if (isFromCurrentUser) {
          return <OutgoingMessage messages={messages} index={index} />;
        }

        return <IncomingMessage messages={messages} index={index} />;
      }}
    />
  );
};
