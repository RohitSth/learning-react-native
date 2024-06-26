import { View, Text, StyleSheet, ImageBackground } from "react-native";

const logoImg = require("../../assets/images/adaptive-icon.png");

import Box from "@/components/Box";

import BoxView from "@/components/BoxView";

export default function Page2() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      {/* Form remote image */}
      {/* <Image
        source={{ uri: "https://picsum.photos/200/300/?blur=2" }}
        style={{ width: 300, height: 300 }}
      /> */}
      {/* Background Image for a view */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image</Text>
        {/* <View style={{ backgroundColor: "plum", flex: 1 }}></View> */}
        <View style={styles.container}>
          <Box
            style={{
              backgroundColor: "#1c4c56",
              paddingTop: 50,
              alignSelf: "flex-start",
            }}
          >
            Box 1
          </Box>
          <Box style={{ backgroundColor: "#7c4c56", alignSelf: "flex-end" }}>
            Box 2
          </Box>
          <Box style={{ backgroundColor: "#9c4c56", alignSelf: "center" }}>
            Box 3
          </Box>
          <Box style={{ backgroundColor: "#7c4c56", alignSelf: "stretch" }}>
            Box 4
          </Box>
          <Box style={{ backgroundColor: "#4c2c56", alignSelf: "auto" }}>
            Box 5
          </Box>
          {/* alignSelf: default is auto and take the value from parent */}
          <Box style={{ backgroundColor: "#1c8856" }}>Box 6</Box>
          <Box style={{ backgroundColor: "#1c9056" }}>Box 7</Box>
        </View>
      </ImageBackground>
      <BoxView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flex: 1,
    // flexDirection: "row",
    // flex-start, flex-end, space-between, space-around, space-evenly
    justifyContent: "space-evenly", // main axis

    // flex-start, flex-end, center, stretch, baseline
    alignItems: "baseline", // cross axis
  },
});
