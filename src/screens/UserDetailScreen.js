import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doPost } from "../config/axios";

export default function UserDetailScreen() {
  const route = useRoute();
  let user = route.params ? (route.params.user ? route.params.user : {}) : {};
  const [selectedRole, setSelectedRole] = useState(user.idRol ? user.idRol : null);
  const [id, setId] = useState(user.id ? user.id : null);
  const [fullName, setFullName] = useState(user.fullName ? user.fullName : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [password, setPassword] = useState(user.password ? user.password : "");

  const formik = useFormik({
    initialValues: {
      fullName: fullName,
      email: email,
      password: password,
      idRol: selectedRole ? selectedRole : "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
      idRol: Yup.string().required("El rol es obligatorio"),
    }),
    onSubmit: async () => {
      await handleSubmit(user);
    },
  });

  const mapUser = () => {
    user.id = id;
    user.fullName = fullName;
    user.email = email;
    user.password = password;
    user.idRol = selectedRole ? selectedRole : null;
    user.roleName = selectedRole ? selectedRole.name : null;
  };

  const roles = [
    { id: "1", name: "Administrador", description: "Pal admin" },
    { id: "2", name: "Cliente", description: "Pal cliente" },
  ];

  const handleFullNameChange = (value) => {
    setFullName(value);
    formik.setFieldValue("fullName", value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    formik.setFieldValue("email", value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    formik.setFieldValue("password", value);
  };

  const handlePickerChangeRole = (role) => {
    setSelectedRole(roles.find((r) => r.id === role));
    formik.setFieldValue("idRol", role);
  };

  const handleSubmit = async (user) => {
    mapUser();
    if (user.id) {
      // Editar
    } else {
      try {
        console.log(user)
        const response = await doPost('/usuarios/create', user);
        console.log(response); // Manejar la respuesta del servidor
      } catch (error) {
        console.error(error); // Manejar el error
      }
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/libreria.jpg")}
        style={styles.background}
      >
        <View style={styles.containerLogo}>
          <View style={styles.formContainer}>
            <Text style={styles.header}>
              {user.id ? "Editar datos" : "Agregar usuario"}
            </Text>
            <Input
              value={fullName}
              onChangeText={handleFullNameChange}
              placeholder="Nombre completo"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              errorMessage={formik.errors.fullName}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Input
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              errorMessage={formik.errors.email}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Input
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              placeholder="Contraseña"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              errorMessage={formik.errors.password}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Picker
              style={styles.picker}
              selectedValue={selectedRole ? selectedRole.id : null}
              onValueChange={handlePickerChangeRole}
              mode="dropdown"
            >
              <Picker.Item
                label="Selecciona un rol"
                value={null}
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              {roles.map((role) => (
                <Picker.Item
                  key={role.id}
                  label={role.name}
                  value={role.id}
                  style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                  color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
                />
              ))}
            </Picker>
            {formik.errors.idRol && (
              <Text style={{ width: "90%", textAlign: "left", fontSize: colors.FONT_SIZE_SMALL, color: "red" }}>
                {formik.errors.idRol}
              </Text>
            )}
            <View style={styles.buttonsContainer}>
              <Button
                title="Guardar"
                titleStyle={{
                  color: colors.getContrastColor(colors.COLOR_PRIMARY),
                }}
                buttonStyle={styles.saveButton}
                onPress={formik.handleSubmit}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 100,
  },
  background: {
    resizeMode: "cover",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 70,
    height: 70,
  },
  header: {
    fontSize: colors.FONT_SIZE_TITLE,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
    fontWeight: "bold",
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  logoTitle: {
    fontSize: colors.FONT_SIZE_LARGE,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.COLOR_FORM_BACKGROUND,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  picker: {
    width: "100%",
    marginBottom: 20,
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
  },
  saveButton: {
    marginTop: 20,
    width: "80%",
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: colors.COLOR_PRIMARY,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
});
