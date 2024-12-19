import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import NavigationStack from "./src/components/navigation/NavigationStack";
import NavigationTab from "./src/components/navigation/NavigationTab";
import NavigationDrawer from "./src/components/navigation/NavigationDrawer";
export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
