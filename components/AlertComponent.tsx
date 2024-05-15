import { View, Text, Alert, Button } from "react-native";

import Greet from "./Greet";

export default function AlertComponent() {
  return (
    <View>
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
