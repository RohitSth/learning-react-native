import { View, Text, ImageBackground } from "react-native";

const logoImg = require("../../assets/images/adaptive-icon.png");

export default function Page2() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      {/* Background Image for a view */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image</Text>
      </ImageBackground>
    </View>
  );
}
