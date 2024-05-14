import { View, Text, Image, ImageBackground } from "react-native";

const logoImg = require("../../assets/images/adaptive-icon.png");

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
      </ImageBackground>
    </View>
  );
}
