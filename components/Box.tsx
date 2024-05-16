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
    width: 70,
    height: 70,
  },
  text: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
