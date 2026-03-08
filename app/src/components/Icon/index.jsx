import React from "react";
import { Ionicons } from "@expo/vector-icons";

/**
 * Icon component to use globally.
 * @param {{
 * color: string,
 * name: string,
 * size: number,
 * style: any,
 *  }} props
 */
const Icon = ({ color, name, size, style }) => (
  <Ionicons name={name} size={size} color={color} style={style} />
);

export default Icon;
