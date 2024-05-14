import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import { useState } from "react";

const logoImg = require("../../assets/images/adaptive-icon.png");

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [showStaturBar, setShowStatusBar] = useState(false);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "skyblue", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={showLoadingIndicator}
      />

      <StatusBar
        backgroundColor="pink"
        barStyle="light-content"
        hidden={showStaturBar}
      />
      <ScrollView>
        <Button
          title="StatusBar Visibility"
          onPress={() => setShowStatusBar(!showStaturBar)}
        />
        <Button
          title="Loading Indicator Visibility"
          onPress={() => setShowLoadingIndicator(!showLoadingIndicator)}
        />
        <Pressable
          onPressIn={() => console.log("Image Pressed In")}
          onLongPress={() => console.log("Image Hold")}
          onPressOut={() => console.log("Pressed Out")}
        >
          <Image
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
            style={{ width: 300, height: 300 }}
          />
        </Pressable>
        <Pressable onPress={() => console.log("Text Pressed")}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            repudiandae aperiam repellat, amet, molestiae ullam c odit libero
            sequi.umque, debitis perferendis veniam tempora error corrupti non
            impedit earum deleniti sed saepe iure ea!Lorem Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Adipisci ab culpa corrupti
            modi, consequuntur fugit delectus quas rerum provident magni dolor a
            excepturi repellendus nam quia! Doloribus Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Veritatis repudiandae aperiam
            repellat, amet, molestiae ullam c odit libero sequi.umque, debitis
            perferendis veniam tempora error corrupti non impedit earum deleniti
            sed saepe iure ea!Lorem Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci ab culpa corrupti modi, consequuntur
            fugit delectus quas rerum provident magni dolor a excepturi
            repellendus nam quia! Doloribus
          </Text>
        </Pressable>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Button
          title="Press"
          onPress={() => setModalVisible(true)}
          color="midnightblue"
          // disabled
        />
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          // animationType="fade"
          animationType="slide"
          // presentationStyle="formSheet" // iOS only
          presentationStyle="pageSheet" // iOS only
        >
          <View style={{ flex: 1, backgroundColor: "blue", padding: 60 }}>
            <Text>Modal Content</Text>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
              color="midnightblue"
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
