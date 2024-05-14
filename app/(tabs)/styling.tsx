import { View, Text, StyleSheet } from "react-native";

export default function Styling() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 60,
  },
  title: {
    fontSize: 24,
    color: "blue",
  },
});
