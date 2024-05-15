import { View, Text, StyleSheet } from "react-native";

export default function Styling() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.greenBg]}>
        <Text
          style={{
            borderRadius: 10, // only applies in android not in ios
            backgroundColor: "lightblue",
            padding: 10,
          }}
        >
          Green Box
        </Text>
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
    // box style
    width: "25%",
    height: "25%",
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // margin: 10,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    // borderStyle: "solid", // solid, dotted, dashed -- solid byy default
    borderRadius: 10, // works in ios and android
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
