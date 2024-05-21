import React from "react";
import { Pressable, Text } from "react-native";

const CustomButtonIOS = ({
  title,
  onPress,
}: {
  title: string;
  onPress: any;
}) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "pink",
      borderRadius: 20,
      padding: 10,
    }}
  >
    <Text style={{ color: "blue", fontSize: 17 }}>{title}</Text>
  </Pressable>
);

export default CustomButtonIOS;
