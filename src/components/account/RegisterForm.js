import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import colors from "../../utils/colors";

export default function RegisterForm() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.contBlue}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </View> */}
      <Text style={styles.textTitle}>Bienvenido a BookBox</Text>
      <Input
        placeholder="Nombre completo"
        containerStyle={{ marginBottom: 10 }}
      ></Input>
      <Input
        placeholder="Correo electrónico"
        containerStyle={{ marginBottom: 10 }}
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={{ marginBottom: 5 }}
      ></Input>
      <Button
        buttonStyle={styles.button}
        title={<Text style={styles.loginText}>Registrarme</Text>}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  contBlue: {
    width: 150,
    height: 50,
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: colors.COLOR_PRIMARY,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  textTitle: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 40,
  },
});
