import { View, Text, Alert, Button } from "react-native";

import Greet from "@/components/Greet";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid data!", "DOB Incorrect!")}
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Invalid data!", "DOB Incorrect!", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      />

      {/* Custom Component */}
      <Greet name="John" />
      <Greet name="Jane" />
    </View>
  );
}
