import { View, StyleSheet } from "react-native";

import Box from "@/components/Box";

export default function App() {
  return (
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>

    <View style={styles.container}>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#7c4c56" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#9c4c56" }}>Box 3</Box>
      {/* <Box style={{ backgroundColor: "#7c4c56" }}>Box 4</Box>
      <Box style={{ backgroundColor: "#4c2c56" }}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c8856" }}>Box 6</Box>
      <Box style={{ backgroundColor: "#1c9056" }}>Box 7</Box> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    // flexDirection: "row-reverse",
    // flex-start, flex-end, space-between, space-around, space-evenly
    justifyContent: "space-evenly", // main axis

    // flex-start, flex-end, center, stretch
    alignItems: "center", // cross axis
  },
});
