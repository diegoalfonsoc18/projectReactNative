import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Diego</Text>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc99",
    alignItems: "center",
    justifyContent: "center",
  },
});
