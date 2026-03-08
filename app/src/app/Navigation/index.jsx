import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ChatRoomsList } from "../../screens/ChatRoomsList";
import { ChatRoom } from "../../screens/ChatRoom";

const Stack = createNativeStackNavigator();

/**
 * Navigation component for the app.
 * @param {{ initialRouteName: string | null }} props - The initial route name.
 * @returns {JSX.Element} The navigation stack.
 */
export const Navigation = ({ initialRouteName }) => (
  <Stack.Navigator
    initialRouteName={initialRouteName}
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Stack.Screen name="ChatRoomsList" component={ChatRoomsList} />
    <Stack.Screen name="ChatRoom" component={ChatRoom} />
  </Stack.Navigator>
);
