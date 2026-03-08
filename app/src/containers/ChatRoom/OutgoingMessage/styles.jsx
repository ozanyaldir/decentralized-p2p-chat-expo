import { Dimensions, StyleSheet } from "react-native";

export const DIMENSION_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  messageBubbleContainerMessage: {
    paddingBottom: 1,
    paddingRight: 22,

    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  messageBubbleMessageViewContainer: {
    alignSelf: "flex-end",
    maxWidth: DIMENSION_WIDTH * 0.54,
  },
  messageBubbleMessageView: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#176E64",
  },
  messageBubbleBody: {
    flexShrink: 1,
    includeFontPadding: false,
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
  },
  tailCorner: {
    position: "absolute",
    right: -5.5,
    bottom: 0,
    height: 8,
    width: 24,
    borderRadius: 5,
    borderRightWidth: 32,
    borderLeftWidth: 0,
    borderBottomWidth: 36,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderBottomColor: "#176E64",
  },
});
