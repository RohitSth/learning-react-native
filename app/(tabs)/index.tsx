import { View, Text, Image, ImageBackground } from "react-native";

const logoImg = require("../../assets/images/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      {/* <View style={{ width: 200, height: 200, backgroundColor: "plum" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View> */}
      <Text>
        <Text style={{ color: "white" }}>Hello</Text> World!!
      </Text>
      <Text>I'm Rohit Shrestha</Text>
      <Image
        source={logoImg}
        style={{ width: 300, height: 300, borderRadius: 50 }}
      />
      {/* Form remote image */}
      <Image
        source={{ uri: "https://picsum.photos/200/300/?blur=2" }}
        style={{ width: 300, height: 300 }}
      />
      {/* Background Image for a view -- in explore.tsx */}
      {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image</Text>
      </ImageBackground> */}
    </View>
  );
}
