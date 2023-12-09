import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";

export default function UserDetailScreen() {
  const route = useRoute();
  const { user } = route.params ? route.params : {};
  const [selectedValue, setSelectedValue] = useState(
    user.role ? user.role : ""
  );
  const [fullName, setFullName] = useState(user.fullName ? user.fullName : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [password, setPassword] = useState(user.password ? user.password : "");

  const mapUser = () => {
    user.id = user.id ? user.id : undefined;
    user.fullName = fullName;
    user.email = email;
    user.password = password;
    user.role = selectedValue;
    console.log(user);
  };

  const handlePickerChange = (value) => {
    setSelectedValue(value);
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    if (user.id) {
      // Editar
    } else {
      // Crear
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
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Input
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Correo electrónico"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
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
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Picker
              style={styles.picker}
              selectedValue={selectedValue}
              onValueChange={handlePickerChange}
              mode="dropdown"
            >
              <Picker.Item
                label="Selecciona un rol"
                value=""
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Administrador"
                value="administrador"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Cliente"
                value="cliente"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
            </Picker>
            <View style={styles.buttonsContainer}>
              <Button
                title="Guardar"
                titleStyle={{
                  color: colors.getContrastColor(colors.COLOR_PRIMARY),
                }}
                buttonStyle={styles.saveButton}
                onPress={() => mapUser()}
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
