import { Dimensions, StyleSheet } from "react-native";

export const DIMENSION_WIDTH = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  messageBubbleContainerMessage: {
    paddingBottom: 1,
    paddingHorizontal: 12,

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",

    gap: 4,
  },
  messageBubbleMessageViewContainer: {
    alignSelf: "flex-start",
    maxWidth: DIMENSION_WIDTH * 0.6,
  },
  messageBubbleMessageView: {
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderCurve: "continuous",
    backgroundColor: "#efefef",
  },
  messageBubbleBody: {
    flexShrink: 1,
    includeFontPadding: false,
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
  },
  tailCorner: {
    position: "absolute",
    left: -8,
    bottom: 0,
    height: 8,
    width: 24,
    borderRadius: 5,
    borderLeftWidth: 32,
    borderRightWidth: 0,
    borderBottomWidth: 36,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#efefef",
  },
});
