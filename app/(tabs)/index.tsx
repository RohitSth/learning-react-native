import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue" }}>
      <View style={{ width: 200, height: 200, backgroundColor: "plum" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View>
    </View>
  );
}
