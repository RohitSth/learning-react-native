import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

import CustomButtonAndroid from "@/components/CustomButton/CustomButtonAndroid.android";
import CustomButtonIOS from "@/components/CustomButton/CustomButtonIOS.ios";

const CustomButton =
  Platform.OS === "ios" ? CustomButtonIOS : CustomButtonAndroid;

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton
            title="Press me"
            onPress={() => alert("Button pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: "blue",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "purple",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
