import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import colors from "../utils/colors";
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doPut } from "../config/axios";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function BookDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { libro } = route.params ? route.params : {};
  const [genre, setGenre] = useState(libro.genre ? libro.genre : "");
  const [name, setName] = useState(libro.name ? libro.name : "");
  const [author, setAuthor] = useState(libro.author ? libro.author : "");
  const [year, setYear] = useState(libro.year ? libro.year : "");
  const [pages, setPages] = useState(libro.pages ? libro.pages : "");
  const [quantity, setQuantity] = useState(
    libro.quantity ? libro.quantity : ""
  );
  const [editorial, setEditorial] = useState(
    libro.editorial ? libro.editorial : ""
  );
  const [id, setId] = useState(libro.id ? libro.id : undefined);

  const handlePickerChange = (value) => {
    setGenre(value);
    formik.setFieldValue("genre", value);
  };

  const handleNombreChange = (value) => {
    setName(value);
    formik.setFieldValue("name", value);
  };

  const handleAutorChange = (value) => {
    setAuthor(value);
    formik.setFieldValue("author", value);
  };

  const handleYearChange = (value) => {
    setYear(parseInt(value));
    formik.setFieldValue("year", parseInt(value));
  };

  const handlePagesChange = (value) => {
    setPages(parseInt(value));
    formik.setFieldValue("pages", parseInt(value));
  };

  const handleQuantityChange = (value) => {
    setQuantity(parseInt(value));
    formik.setFieldValue("quantity", parseInt(value));
  };

  const handleEditorialChange = (value) => {
    setEditorial(value);
    formik.setFieldValue("editorial", value);
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      author: author,
      year: year,
      pages: pages,
      genre: genre,
      quantity: quantity,
      editorial: editorial,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      author: Yup.string().required("El autor es obligatorio"),
      year: Yup.number().required("El año es obligatorio"),
      pages: Yup.number().required("Las páginas son obligatorias"),
      genre: Yup.string().required("El género es obligatorio"),
      quantity: Yup.number().required("La cantidad es obligatoria"),
      editorial: Yup.string().required("La editorial es obligatoria"),
    }),
    onSubmit: async (formData) => {
      console.log(formData);
      console.log(libro.id);
      try {
        const response = await doPut(`/libros/update/${libro.id}`, formData);
        console.log(response);
        if (response.data.statusCode === 200) {
          alert("Libro actualizado correctamente");
          formik.resetForm();
          navigation.navigate("BooksS");
          Toast.show({
            text1: "Libro actualizado correctamente",
            type: "success",
            visibilityTime: 2000,
          });
        } else {
          alert("Error al actualizar el libro");
        }
      } catch (error) {
        console.log(error);
        alert("Error al actualizar el libro");
      }
    },
  });

  const handleSubmit = () => {
    if (libro.id) {
      // Editar
    } else {
      // Crear
    }
  };

  return (
    <KeyboardAwareScrollView>
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
              value={name}
              onChangeText={handleNombreChange}
              placeholder="Nombre del libro"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.name}
            />
            <Input
              value={author}
              onChangeText={handleAutorChange}
              placeholder="Autor"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.author}
            />
            <Input
              value={year.toString()}
              onChangeText={handleYearChange}
              placeholder="Año"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.year}
            />
            <Input
              value={pages.toString()}
              onChangeText={handlePagesChange}
              placeholder="Páginas"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.pages}
            />
            <Input
              value={quantity.toString()}
              onChangeText={handleQuantityChange}
              placeholder="Cantidad"
              keyboardType="numeric"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.quantity}
            />
            <Input
              value={editorial}
              onChangeText={handleEditorialChange}
              placeholder="Editorial"
              placeholderTextColor={colors.getContrastColor(
                colors.COLOR_FORM_BACKGROUND
              )}
              style={{
                color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
              }}
              errorMessage={formik.errors.editorial}
            />

            <Picker
              style={styles.picker}
              genre={genre}
              selectedValue={genre}
              onValueChange={handlePickerChange}
              mode="dropdown"
              error={formik.errors.genre}
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
                type="submit"
                buttonStyle={styles.saveButton}
                onPress={formik.handleSubmit}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
    color: colors.getContrastColor(colors.COLOR_FORM_BACKGROUND),
  },
  saveButton: {
    width: "80%",
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    backgroundColor: colors.COLOR_PRIMARY,
  },
  buttonsContainer: {
    marginTop: -40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
