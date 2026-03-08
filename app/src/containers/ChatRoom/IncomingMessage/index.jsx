import { Text, View } from "react-native";
import { styles } from "./styles";
import { isBottomMessage, isTopMessage } from "../../../util/message-bubble";

/**
 * @param {{
 * messages: any[],
 * index: number,
 *  }} props
 */
export const IncomingMessage = ({ messages, index }) => {
  const message = messages.at(index);

  const topMessage = isTopMessage(messages, index);
  const bottomMessage = isBottomMessage(messages, index);

  return (
    <View
      style={[
        styles.messageBubbleContainerMessage,
        {
          paddingTop: topMessage ? 13 : 1,
        },
      ]}
    >
      <View
        style={[
          styles.messageBubbleMessageViewContainer,
          {
            borderTopLeftRadius: topMessage ? 12 : 8,
          },
        ]}
      >
        {bottomMessage && <View style={styles.tailCorner} />}
        <View
          style={[
            styles.messageBubbleMessageView,
            {
              borderBottomLeftRadius: bottomMessage ? 0 : 8,
            },
          ]}
        >
          <Text style={styles.messageBubbleBody}>
            {message?.message ?? " "}
          </Text>
        </View>
      </View>
    </View>
  );
};
