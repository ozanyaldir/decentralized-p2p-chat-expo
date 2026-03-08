import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    position: "absolute",
    left: 24,
    right: 24,
    top: "30%",
    gap: 10,
  },
  titleText: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "#000000CC",
  },
  buttonsContainer: {
    gap: 6,
  },
  button: {},
  buttonText: {
    alignSelf: "center",
    color: "cornflowerblue",
    fontSize: 14,
    fontWeight: 500,
  },
});
