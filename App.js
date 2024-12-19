import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar firstname="Diego" lastname="Alfonso" />
      <Saludar />
      {/*<Saludar firstname="Aleja" lastname="Ruiz" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#19384A",
    alignItems: "center",
    justifyContent: "center",
  },
});
