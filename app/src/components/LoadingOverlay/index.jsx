import { View, ActivityIndicator, StyleSheet } from "react-native";

/**
 * Loading overlay component.
 * @returns {JSX.Element} View component.
 */
export const LoadingOverlay = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#FFF" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
});
