import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";

export default function BookDetailScreen() {
  const route = useRoute();
  const { libro } = route.params ? route.params : {};
  const [gender, setGender] = useState(libro.gender ? libro.gender : "");
  const [nombre, setNombre] = useState(libro.nombre ? libro.nombre : "");
  const [autor, setAutor] = useState(libro.autor ? libro.autor : "");

  const mapLibro = () => {
    libro.id = libro.id ? libro.id : undefined;
    libro.nombre = libro.nombre ? libro.nombre : "";
    libro.autor = libro.autor ? libro.autor : "";
    libro.gender = libro.gender ? libro.gender : "";
    console.log(libro);
  };

  const handlePickerChange = (value) => {
    setGender(value);
  };

  const handleNombreChange = (value) => {
    setNombre(value);
  };

  const handleAutorChange = (value) => {
    setAutor(value);
  };

  const handleSubmit = () => {
    if (libro.id) {
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
              {libro.id ? "Editar datos" : "Agregar libro"}
            </Text>
            <Input
              value={nombre}
              onChangeText={handleNombreChange}
              placeholder="Nombre del libro"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Input
              value={autor}
              onChangeText={handleAutorChange}
              placeholder="Autor"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
            />
            <Picker
              style={styles.picker}
              gender={gender}
              onValueChange={handlePickerChange}
              mode="dropdown"
            >
              <Picker.Item
                label="Selecciona un género"
                value=""
                disabled
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela histórica"
                value="Novela histórica"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela romántica"
                value="Novela romántica"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela de terror"
                value="Novela de terror"
                style={{ backgroundColor: colors.COLOR_FORM_BACKGROUND }}
                color={colors.getContrastColor(colors.COLOR_FORM_BACKGROUND)}
              />
              <Picker.Item
                label="Novela de ciencia ficción"
                value="Novela de ciencia ficción"
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
                onPress={() => mapLibro()}
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
    justifyContent: "space-around",
    width: "100%",
  },
});
