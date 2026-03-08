import { Dimensions, StyleSheet } from "react-native";

export const DIMENSION_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,

    flexDirection: "row",
    alignItems: "flex-end",

    paddingVertical: 4,
    paddingLeft: 18,

    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    borderCurve: "continuous",
    gap: 4,
  },
  textInput: {
    flex: 1,
    letterSpacing: -0.2,
    justifyContent: "center",
    paddingVertical: 11,
    overflow: "hidden",
    color: "#000",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 20,
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  buttonText: {
    letterSpacing: 0.12,
    color: "#000",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "600",
  },
});
