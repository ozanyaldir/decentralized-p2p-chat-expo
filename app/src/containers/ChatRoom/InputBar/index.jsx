import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

/**
 * @param {{
 * inputRef: string,
 * onPressSend?: () => void,
 *  }} props
 * @returns {JSX.Element}
 */
export const InputBar = ({ inputRef, onPressSend }) => {
  const safeAreaInsets = useSafeAreaInsets();

  const [messageText, setMessageText] = useState("");

  async function didPressSend() {
    onPressSend(messageText);
    setMessageText("");
  }

  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: safeAreaInsets.bottom + 12,
        },
      ]}
    >
      <TextInput
        style={styles.textInput}
        ref={inputRef}
        value={messageText}
        returnKeyType="done"
        submitBehavior="submit"
        onChangeText={setMessageText}
        onSubmitEditing={didPressSend}
        maxLength={140}
        multiline={true}
        placeholderTextColor={"#222"}
        placeholder={"Write your message"}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={didPressSend}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
