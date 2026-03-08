import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flex: 1,
    gap: 4,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 500,
    maxWidth: "70%",
  },
  descriptionText: {
    color: "#222",
    fontSize: 13,
    fontWeight: 400,
    maxWidth: "70%",
  },
  chevronContainer: {
    position: "absolute",
    right: 8,
  },
});
