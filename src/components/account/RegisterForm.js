import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import colors from "../../utils/colors";
import { color } from "react-native-elements/dist/helpers";

export default function RegisterForm() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.contBlue}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </View> */}
      <Text style={styles.textTitle}>Bienvenido a BookBox</Text>
      <Input
        placeholder="Nombre completo"
        placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
        containerStyle={{ marginBottom: 10 }}
      ></Input>
      <Input
        placeholder="Correo electrónico"
        placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
        containerStyle={{ marginBottom: 10 }}
      ></Input>
      <Input
        placeholder="Contraseña"
        placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
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
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
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
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  loginText: {
    color: colors.getContrastColor(colors.COLOR_PRIMARY),
    fontWeight: "bold",
    textAlign: "center",
    fontSize: colors.FONT_SIZE_TITLE,
  },
  textTitle: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: colors.FONT_SIZE_TITLE,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    marginBottom: 40,
  },
  forgotPassword: {
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    fontSize: colors.FONT_SIZE_NORMAL,
  },
});
