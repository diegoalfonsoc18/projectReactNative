import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar name="Diego Alfonso" />
      <Saludar name="Mimo" />
      <Saludar name="Maria Alejandra" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc0000",
    alignItems: "center",
    justifyContent: "center",
  },
});
