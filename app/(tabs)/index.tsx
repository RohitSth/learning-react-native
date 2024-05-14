import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";

const logoImg = require("../../assets/images/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          repudiandae aperiam repellat, amet, molestiae ullam c odit libero
          sequi.umque, debitis perferendis veniam tempora error corrupti non
          impedit earum deleniti sed saepe iure ea!Lorem Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Adipisci ab culpa corrupti modi,
          consequuntur fugit delectus quas rerum provident magni dolor a
          excepturi repellendus nam quia! Doloribus Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis repudiandae aperiam repellat,
          amet, molestiae ullam c odit libero sequi.umque, debitis perferendis
          veniam tempora error corrupti non impedit earum deleniti sed saepe
          iure ea!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Adipisci ab culpa corrupti modi, consequuntur fugit delectus
          quas rerum provident magni dolor a excepturi repellendus nam quia!
          Doloribus
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Button
          title="Press"
          onPress={() => console.log("Button Pressed")}
          color="midnightblue"
          // disabled
        />
      </ScrollView>
    </View>
  );
}
