import { View, Text, StyleSheet } from "react-native";

export default function Styling() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.greenBg]}>
        <Text>Green Box</Text>
      </View>
      <View style={[styles.box, styles.grayBg]}>
        <Text>Black Box</Text>
      </View>
      {/* <Text style={styles.title}>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: "blue",
  },
  greenBg: {
    backgroundColor: "green",
  },
  grayBg: {
    backgroundColor: "gray",
  },
});
