import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { saveData, getData } from "../../utils/Storage";
import { useFormik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginForm() {
  const navigation = useNavigation();

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
      await AsyncStorage.setItem("email", formData.email);
      await AsyncStorage.setItem("password", formData.password);
      navigation.navigate("MainTabs");
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
        containerStyle={{ marginBottom: 10 }}
        onChangeText={(text) => {
          formik.setFieldValue("email", text);
        }}
        errorMessage={formik.errors.email}
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={{ marginBottom: 30 }}
        onChangeText={(text) => {
          formik.setFieldValue("password", text);
        }}
        errorMessage={formik.errors.password}
      ></Input>
      <Button
        buttonStyle={styles.button}
        type="submit"
        onPress={formik.handleSubmit}
        title={<Text style={styles.loginText}>Iniciar sesión</Text>}
      ></Button>
      <Text>
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
