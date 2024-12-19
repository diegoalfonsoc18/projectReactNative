import React from "react";
import { Text, TextInput, Button, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviar")} />
    </View>
  );
}
