import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationBar as BaseNavigationBar } from "../../../components/NavigationBar";
import Icon from "../../../components/Icon";

/**
 * Navigation component.
 * @param {{
 * title: string,
 * onPressBack?: () => void,
 * onPressCopy?: () => void,
 *  }} props
 */
export const NavigationBar = ({ title, onPressBack, onPressCopy }) => {
  return (
    <BaseNavigationBar>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.6}
          onPress={onPressBack}
        >
          <Icon name="chevron-back-outline" color={"#000"} size={22} />
        </TouchableOpacity>
        <Text
          selectable
          style={styles.titleText}
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {title}
        </Text>
        <TouchableOpacity
          style={styles.copyButton}
          activeOpacity={0.6}
          onPress={onPressCopy}
        >
          <Icon name="copy-outline" color={"cornflowerblue"} size={16} />
        </TouchableOpacity>
      </View>
    </BaseNavigationBar>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    gap: 8,
  },
  titleText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
    maxWidth: "50%",
  },
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  copyButton: {
    paddingTop: 4,
    paddingBottom: 4,
  },
});
