import React from "react";
import { Pressable, Text } from "react-native";

const CustomButtonAndroid = ({
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
      backgroundColor: "green",
      borderRadius: 5,
      padding: 10,
    }}
  >
    <Text style={{ color: "blue", fontSize: 17 }}>{title}</Text>
  </Pressable>
);

export default CustomButtonAndroid;
