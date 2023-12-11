import React, { createRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { saveData, getData } from "../../utils/Storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doPut } from "../../config/axios";
import Toast from 'react-native-toast-message';

export default function LoginForm() {
  const navigation = useNavigation();

  const login = async (data) => {
    try {
      const response = await doPut("/usuarios/login", data);
      AsyncStorage.setItem("token", response.data.token);
      AsyncStorage.setItem("user", JSON.stringify(response.data));
      if(response.data.data){
        navigation.replace("MainTabs");
      }
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (formData) => {
      await login(formData)
    },
  });
  return (
    <View style={styles.container}>
      {/* <View style={styles.contBlue}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </View> */}
      <Text style={styles.textTitle}>Bienvenido a BookBox</Text>
      <Input
        placeholder="Correo electrónico"
        placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
        style={{ color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND) }}
        containerStyle={{ marginBottom: 10 }}
        onChangeText={(text) => {
          formik.setFieldValue("email", text);
        }}
        errorMessage={formik.errors.email}
      ></Input>
      <Input
        placeholder="Contraseña"
        placeholderTextColor={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
        style={{ color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND) }}
        containerStyle={{ marginBottom: 30 }}
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
        secureTextEntry={true}
        errorMessage={formik.errors.password}
      ></Input>
      <Button
        buttonStyle={styles.button}
        type="submit"
        onPress={formik.handleSubmit}
        title={<Text style={styles.loginText}>Iniciar sesión</Text>}
      ></Button>
      <Text style={styles.forgotPassword}>
        ¿Olvidaste la contraseña?{" "}
        <Text style={{ color: "#18ACFF", fontWeight: "bold" }}>
          {" "}
          Recuperala
        </Text>
      </Text>
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
