import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationBar as BaseNavigationBar } from "../../../components/NavigationBar";
import Icon from "../../../components/Icon";

/**
 * Navigation component.
 * @param {{
 * title: string,
 * onPressRightButton?: () => void,
 *  }} props
 */
export const NavigationBar = ({ title, onPressRightButton }) => {
  return (
    <BaseNavigationBar>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText} numberOfLines={1} lineBreakMode="tail">
          {title}
        </Text>
        <TouchableOpacity
          style={styles.rightButton}
          activeOpacity={0.6}
          onPress={onPressRightButton}
        >
          <Icon name="create-outline" color={"#000"} size={22} />
        </TouchableOpacity>
      </View>
    </BaseNavigationBar>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
  },
  titleText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
    maxWidth: "40%",
  },
  rightButton: {
    position: "absolute",
    right: 0,
    paddingTop: 1,
    paddingLeft: 4,
    paddingRight: 12,
  },
});
