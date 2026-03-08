import { NavigationBar } from "../../containers/ChatRoom/NavigationBar";
import { styles } from "./styles";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MessageList } from "../../containers/ChatRoom/MessageList";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import useChatRoomViewModel from "../../viewmodels/ChatRoom";
import { InputBar } from "../../containers/ChatRoom/InputBar";
import Clipboard from "@react-native-clipboard/clipboard";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ChatRoom = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const passedTopic = route.params?.topic;

  const safeAreaInsets = useSafeAreaInsets();
  const inputRef = useRef(null);
  const keyboardHeight = useSharedValue(0);

  const {
    topic,
    currentUserMemberId,
    messages,
    init,
    sendMessage,
    startListenMessageEvents,
    stopListenMessageEvents,
  } = useChatRoomViewModel();

  useEffect(() => {
    if (!passedTopic) navigation.goBack();
    init(passedTopic);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (topic) startListenMessageEvents();

      return () => {
        stopListenMessageEvents();
      };
    }, [topic, startListenMessageEvents, stopListenMessageEvents]),
  );

  useKeyboardHandler(
    {
      onStart: (e) => {
        "worklet";
        keyboardHeight.value = e.height;
      },
      onEnd: (e) => {
        "worklet";
        keyboardHeight.value = e.height;
      },
    },
    [],
  );

  function didPressBack() {
    navigation.goBack();
  }

  function didPressCopy() {
    Clipboard.setString(topic);
  }

  function didPressSend(text) {
    sendMessage(text);
  }

  const keyboardAnimatedStyle = useAnimatedStyle(() => ({
    paddingBottom:
      keyboardHeight.value < safeAreaInsets.bottom
        ? 0
        : keyboardHeight.value - safeAreaInsets.bottom,
  }));

  const messagesComponent = useMemo(
    () => (
      <MessageList
        currentUserMemberId={currentUserMemberId}
        messages={messages}
      />
    ),
    [currentUserMemberId, messages],
  );

  return (
    <Animated.View style={[styles.container, keyboardAnimatedStyle]}>
      <NavigationBar
        title={topic}
        onPressCopy={() => didPressCopy()}
        onPressBack={() => didPressBack()}
      />
      {messagesComponent}
      <InputBar inputRef={inputRef} onPressSend={didPressSend} />
    </Animated.View>
  );
};
