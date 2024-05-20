import { View, Text, StyleSheet } from "react-native";

export default function DynamicUI() {
  return (
    <View style={styles.container}>
      <Text>Dynamic UI</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
  },
});
