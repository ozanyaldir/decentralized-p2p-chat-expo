import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Empty page component.
 * @param {{
 * onPressCreateRoom?: () => void,
 * onPressJoinRoom?: () => void,
 *  }} props
 */
export const EmptyPageView = ({ onPressCreateRoom, onPressJoinRoom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>No joined rooms yet.</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={onPressCreateRoom}
          >
            <Text style={styles.buttonText}>Create new room</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.6}
            onPress={onPressJoinRoom}
          >
            <Text style={styles.buttonText}>Join room</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
