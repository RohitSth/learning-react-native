import { View, Text, StyleSheet, ViewStyle } from "react-native";

interface BoxProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function Box({ children, style }: BoxProps) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "skyblue",
    padding: 20,
    width: 100,
    height: 100,
    // flexGrow: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
