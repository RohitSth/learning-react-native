import { View, Text } from "react-native";

export default function Greet({ name }: { name: string }) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}
