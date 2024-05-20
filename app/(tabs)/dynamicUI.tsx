import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function DynamicUI() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Dynamic UI</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: windowWidth > 500 ? 50 : 24,
    fontWeight: "bold",
  },
});
